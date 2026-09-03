import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import browser from 'webextension-polyfill';
import { EdgeTTSClient, Voice } from '../lib/EdgeTTSClient';
import './styles.css';

const DEFAULT_VOICE = 'en-US-ChristopherNeural';
type PanelState = { state: string; status: string; followEnabled: boolean };
const command = (name: string, data: Record<string, unknown> = {}) => browser.runtime.sendMessage({ action: 'panelCommand', command: name, ...data });

function SidePanel() {
  const [reader, setReader] = useState<PanelState>({ state: 'idle', status: '', followEnabled: true });
  const [voices, setVoices] = useState<Voice[]>([]);
  const [voiceName, setVoiceName] = useState(DEFAULT_VOICE);
  const [speed, setSpeed] = useState(1.2);
  const [search, setSearch] = useState('');
  const [language, setLanguage] = useState('');
  const [gender, setGender] = useState('');
  const [panelError, setPanelError] = useState('');

  useEffect(() => {
    browser.storage.sync.get({ voiceName: DEFAULT_VOICE, customVoice: '', speed: 1.2 }).then(async (settings) => {
      const migrated = (settings.customVoice as string) || (settings.voiceName as string) || DEFAULT_VOICE;
      setVoiceName(migrated); setSpeed(settings.speed as number);
      if (settings.customVoice) await browser.storage.sync.set({ voiceName: migrated, customVoice: '' });
    });
    command('getState').then((value) => setReader(value as PanelState)).catch(() => undefined);
    new EdgeTTSClient().getVoices().then((items) => setVoices(items.sort((a, b) => a.Locale.localeCompare(b.Locale) || a.FriendlyName.localeCompare(b.FriendlyName)))).catch(() => setPanelError('Could not load the voice catalogue. Your saved voice will still work.'));
    const listener = (raw: unknown) => {
      const value = raw as { action?: string } & PanelState;
      if (value.action === 'stateChanged') setReader(value);
    };
    browser.runtime.onMessage.addListener(listener as browser.Runtime.OnMessageListener);
    return () => browser.runtime.onMessage.removeListener(listener as browser.Runtime.OnMessageListener);
  }, []);

  const languages = useMemo(() => [...new Set(voices.map((voice) => voice.Locale.split('-')[0]))].sort(), [voices]);
  const filtered = useMemo(() => voices.filter((voice) => {
    const text = `${voice.FriendlyName} ${voice.ShortName} ${voice.Locale} ${voice.Gender}`.toLocaleLowerCase();
    return text.includes(search.toLocaleLowerCase()) && (!language || voice.Locale.startsWith(`${language}-`)) && (!gender || voice.Gender === gender);
  }), [voices, search, language, gender]);
  const send = (name: string, data: Record<string, unknown> = {}) => command(name, data).then(() => setPanelError('')).catch((error) => setPanelError(error instanceof Error ? error.message : 'This page cannot be controlled.'));
  const selectVoice = (value: string) => {
    setVoiceName(value);
    send('changeVoice', { voiceName: value });
  };
  const active = ['generating', 'continuing', 'playing', 'paused', 'error'].includes(reader.state);

  return <main className="app">
    <header className="header"><h1>Read aloud</h1></header>
    <div className={`status ${(panelError || reader.state === 'error') ? 'error' : ''}`}>{panelError || reader.status || ({ idle: 'Ready to read', stopped: 'Stopped', generating: 'Generating audio…', continuing: 'Loading more text…', playing: 'Playing', paused: 'Paused', error: 'Playback failed' } as Record<string,string>)[reader.state] || reader.state}</div>
    <div className="controls">
      {!active || reader.state === 'error' ? <button className="button primary" onClick={() => send(reader.state === 'error' ? 'retryPlayback' : 'readPage')}>{reader.state === 'error' ? 'Retry' : 'Start reading'}</button> : <button className="button primary" onClick={() => send('togglePlayback')}>{reader.state === 'playing' ? 'Pause' : 'Resume'}</button>}
      <button className="button danger" disabled={!active} onClick={() => send('stopPlayback')}>Stop</button>
      <button className="button wide" disabled={!active || reader.followEnabled} onClick={() => send('resumeFollow')}>{reader.followEnabled ? 'Following spoken text' : 'Resume following text'}</button>
    </div>
    <section className="section">
      <div className="label-row"><span>Speed</span><strong>{speed.toFixed(1)}×</strong></div>
      <input type="range" min="0.5" max="2" step="0.1" value={speed} onChange={(event) => { const value = Number(event.target.value); setSpeed(value); browser.storage.sync.set({ speed: value }); send('changeSpeed', { value }); }} />
    </section>
    <section className="section">
      <div className="label-row"><span>Voice</span><span className="voice-name">{voiceName}</span></div>
      <input className="search" type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search voices, languages, or regions" />
      <div className="filters"><select className="filter" value={language} onChange={(event) => setLanguage(event.target.value)}><option value="">All languages</option>{languages.map((item) => <option key={item}>{item}</option>)}</select><select className="filter" value={gender} onChange={(event) => setGender(event.target.value)}><option value="">All genders</option><option>Female</option><option>Male</option></select><button className="button clear" onClick={() => { setSearch(''); setLanguage(''); setGender(''); }}>Clear</button></div>
      <div className="count">{voices.length ? `${filtered.length} matching voices` : 'Loading voices…'}</div>
      <div className="voice-list" role="listbox" aria-label="Available voices">{filtered.map((voice) => <button type="button" role="option" aria-selected={voice.ShortName === voiceName} className={`voice-option ${voice.ShortName === voiceName ? 'selected' : ''}`} key={voice.ShortName} onClick={() => selectVoice(voice.ShortName)}><span>{voice.FriendlyName || voice.ShortName}</span><small>{voice.Locale} · {voice.Gender}</small></button>)}</div>
      <p className="hint">Changing the voice during playback continues from the currently highlighted word.</p>
    </section>
  </main>;
}

createRoot(document.getElementById('root')!).render(<SidePanel />);

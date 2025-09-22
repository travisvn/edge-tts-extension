import browser from 'webextension-polyfill';
import { circlePause, circleStop } from '../lib/svgs';

export async function createControlPanel(isLoading = true): Promise<HTMLElement> {
	const settings = await browser.storage.sync.get({
		darkMode: false,
	});

	const panel = document.createElement('div');
	panel.className = 'etts-tts-controls';
	panel.id = 'tts-control-panel';

	if (settings.darkMode) {
		panel.dataset.theme = 'dark';
	}

	updatePanelContent(panel, isLoading);
	document.body.appendChild(panel);
	return panel;
}

export function updatePanelContent(panel: HTMLElement, isLoading: boolean): void {
	panel.innerHTML = `
		${isLoading ? `
			<div class="etts-flex-center etts-loading-container">
				<span>Generating audio...</span>
				<div class="etts-loading-spinner"></div>
			</div>
		` : `
			<div class="etts-flex-center">
				<button id="tts-pause" class="etts-tts-button">
					${circlePause}
					<span>Pause</span>
				</button>
				<button id="tts-stop" class="etts-tts-button etts-red">
					${circleStop}
					<span>Stop</span>
				</button>
			</div>
		`}
	`;

	if (!isLoading) {
		const pauseButton = panel.querySelector('#tts-pause');
		const stopButton = panel.querySelector('#tts-stop');

		if (pauseButton) pauseButton.addEventListener('click', () => {
			(window as any).togglePause?.();
		});

		if (stopButton) stopButton.addEventListener('click', () => {
			(window as any).stopPlayback?.();
		});
	}
}

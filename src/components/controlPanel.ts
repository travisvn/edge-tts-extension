import { circlePause, circleStop } from '../lib/svgs';

export async function createControlPanel(isLoading = true) {
	const settings = await chrome.storage.sync.get({
		darkMode: false,
	});

	let existingPanel = document.getElementById('tts-control-panel')
	if (existingPanel) {
		if (settings.darkMode) {
			existingPanel.dataset.theme = 'dark';
		}
		return existingPanel;
	}

	const panel = document.createElement('div');
	panel.className = 'tts-controls';
	panel.id = 'tts-control-panel';
	panel.dataset.isLoading = `${isLoading}`;

	if (settings.darkMode) {
		panel.dataset.theme = 'dark';
		// panel.className += ' dark';
	}

	document.body.appendChild(panel);
	updatePanelContent(isLoading);
	return panel;
}

export async function updatePanelContent(isLoading = true) {

	let panel = document.getElementById('tts-control-panel')

	if (!panel) {
		panel = await createControlPanel(true)
	}

	panel.dataset.isLoading = `${isLoading}`;
	panel.innerHTML = `
		${panel.dataset.isLoading === 'true' ? `
			<div class="flex-center loading-container">
				<span>Generating audio...</span>
				<div class="loading-spinner"></div>
			</div>
		` : `
			<div class="flex-center">
				<button id="tts-pause" class="tts-button">
					${circlePause}
					<span>Pause</span>
				</button>
				<button id="tts-stop" class="tts-button red">
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
			window.onClickTogglePause?.();
		});

		if (stopButton) stopButton.addEventListener('click', () => {
			window.onClickStopPlayback?.();
		});

		setupMediaSessionListeners(pauseButton as HTMLButtonElement);
	}
}

function updatePauseButton(button: HTMLButtonElement, isPlaying: boolean) {
	button.innerHTML = isPlaying
		? `${circlePause} <span>Pause</span>`
		: `<svg>⏵</svg> <span>Play</span>`; // Replace ⏵ with your play icon
}

function togglePause() {
	const isPlaying = navigator.mediaSession.playbackState === 'playing';
	navigator.mediaSession.playbackState = isPlaying ? 'paused' : 'playing';

	const pauseButton = document.getElementById('tts-pause') as HTMLButtonElement;
	updatePauseButton(pauseButton, !isPlaying);

	// Trigger the global pause/play function
	window.onClickTogglePause?.(!isPlaying);
}



function setupMediaSessionListeners(pauseButton: HTMLButtonElement) {
	if (!('mediaSession' in navigator)) return;

	// Listen for global play/pause actions
	navigator.mediaSession.setActionHandler('pause', () => {
		updatePauseButton(pauseButton, false);
		window.onClickTogglePause?.(false);
	});

	navigator.mediaSession.setActionHandler('play', () => {
		updatePauseButton(pauseButton, true);
		window.onClickTogglePause?.(true);
	});

	// Update button when playback state changes
	navigator.mediaSession.playbackState = 'playing'; // Default to playing
}

import browser from 'webextension-polyfill';
import { circlePause, circleStop } from '../lib/svgs';

export async function createControlPanel(isLoading = true) {
	const settings = await browser.storage.sync.get({
		darkMode: false,
	});

	const panel = document.createElement('div');
	panel.className = 'tts-controls';
	panel.id = 'tts-control-panel';

	if (settings.darkMode) {
		panel.dataset.theme = 'dark';
		// panel.className += ' dark';
	}

	updatePanelContent(panel, isLoading);
	document.body.appendChild(panel);
	return panel;
}

export function updatePanelContent(panel, isLoading) {
	panel.innerHTML = `
		${isLoading ? `
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
			window.togglePause?.();
		});

		if (stopButton) stopButton.addEventListener('click', () => {
			window.stopPlayback?.();
		});
	}
}

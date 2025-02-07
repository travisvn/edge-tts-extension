import { circlePause, circleStop } from '../lib/svgs';

export async function createControlPanel(isLoading = true) {
	const settings = await chrome.storage.sync.get({
		darkMode: false,
	});

	let existingPanel = document.getElementById('tts-control-panel')
	if(existingPanel){
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
	}

	document.body.appendChild(panel);
	updatePanelContent(isLoading);
	return panel;
}

export async function updatePanelContent(isLoading = true) {

	let panel = document.getElementById('tts-control-panel')
 console.log('panel when update:', panel);

	if (!panel) {
		panel = await createControlPanel(true)
	}

	panel.dataset.isLoading = `${isLoading}`;
	panel.innerHTML = `
		${panel.dataset.isLoading==='true' ? `
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

		if (pauseButton)
			pauseButton.addEventListener("click", () => {
				window.onClickTogglePause?.();
			});

		if (stopButton)
			stopButton.addEventListener("click", () => {
				window.onClickStopPlayback?.();
			});
	}
}

const playPauseButton = document.getElementById('playPause');
const forwardButton = document.getElementById('forward');
const volumeControl = document.getElementById('volumeControl');
const radio = document.getElementById('radio');
const musicTitle = document.getElementById('musicTitle');

playPauseButton.addEventListener('click', function() {
    if (radio.paused) {
        radio.play();
        playPauseButton.classList.remove('fa-play');
        playPauseButton.classList.add('fa-pause');
    } else {
        radio.pause();
        playPauseButton.classList.remove('fa-pause');
        playPauseButton.classList.add('fa-play');
    }
});

volumeControl.addEventListener('input', function() {
    radio.volume = volumeControl.value;
});

radio.addEventListener('play', function() {
    playPauseButton.classList.remove('fa-play');
    playPauseButton.classList.add('fa-pause');
});

radio.addEventListener('pause', function() {
    playPauseButton.classList.remove('fa-pause');
    playPauseButton.classList.add('fa-play');
});

forwardButton.addEventListener('click', function() {
    // Avançar para a próxima música, se desejar
});

radio.addEventListener('loadedmetadata', function() {
    musicTitle.textContent = radio.currentSrc; // Ajustar para obter o título da música
});

document.addEventListener('DOMContentLoaded', function() {
    radio.play();
});

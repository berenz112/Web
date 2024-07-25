document.getElementById('playButton').addEventListener('click', function() {
    var audio = document.getElementById('audio');
    if (audio.paused) {
        audio.play();
        this.textContent = 'Stop';
    } else {
        audio.pause();
        audio.currentTime = 0;
        this.textContent = 'Play';
    }
});
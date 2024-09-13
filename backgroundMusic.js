document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('music');

    function playAudio() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
            event.preventDefault();
            playAudio();
        }
    });
});
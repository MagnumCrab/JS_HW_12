const videoEl = document.querySelector('video');
const playVideoEl = document.querySelector('.fa-play');
const pauseVideoEl = document.querySelector('.fa-pause');
const volumeEl = document.querySelector('.volume');
const timingEl = document.querySelector('.timing');
const currentTimeEl = document.querySelector('.currentTime');

playVideoEl.addEventListener('click', () => {
if (videoEl.paused) {
        videoEl.play();
    } else {
        videoEl.pause();
    }
});
pauseVideoEl.addEventListener('click', () => {
if (!videoEl.paused) {
        videoEl.pause();
    } else {
        videoEl.play();
    }
});
videoEl.addEventListener('timeupdate', () => {
    const minutes = Math.floor(videoEl.currentTime / 60);
    const seconds = Math.floor(videoEl.currentTime - minutes * 60);

    const minuteValue = minutes.toString().padStart(2, '0');
    const secondValue = seconds.toString().padStart(2, '0');

    const mediaTime = `${minuteValue}:${secondValue}`;
    currentTimeEl.innerText = mediaTime;
    timingEl.value = videoEl.currentTime;
});
timingEl.addEventListener('input', () => {
    videoEl.currentTime = timingEl.value;
});
volumeEl.addEventListener('input', () =>{
    videoEl.volume = volumeEl.value;
});
const close = document.getElementById('close');
const banner = document.getElementById('banner');
const watch = document.getElementById('watch');
const video = document.getElementById('video');
let isWatching = false;
const videoDimmer = document.getElementById('dimmer');
const playButton = document.getElementById('play-button');
const text = document.getElementById('text');

const closeBanner = () => {
  banner.style.display = 'none';
};

close.addEventListener('click', closeBanner, true);

const handleButton = () => {
  if (isWatching) {
    video.style.display = 'none';
    video.pause();
    watch.style.transform = 'rotate(45deg)';
    isWatching = false;
    playButton.style.display = 'none';
    videoDimmer.style.display = 'none';
  } else {
    video.style.display = 'block';
    videoDimmer.style.display = 'block';
    playButton.style.display = 'block';
    watch.style.transform = 'rotate(45deg)';
    text.style.display = 'none';
    isWatching = true;
  }
};

watch.addEventListener('click', handleButton);

playButton.addEventListener('click', () => {
  playButton.style.display = 'none';
  video.play();
});

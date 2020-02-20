const close = document.getElementById('close');
const banner = document.getElementById('banner');
const watch = document.getElementById('watch');
const video = document.getElementById('video');
let isWatching = false;
const videoDimmer = document.getElementById('dimmer');

const closeBanner = () => {
  banner.style.display = 'none';
};

close.addEventListener('click', closeBanner, true);

const handleButton = () => {
  if (isWatching) {
    video.style.display = 'none';
    watch.style.transform = 'rotate(45deg)';
    isWatching = false;
    videoDimmer.style.display = 'none';
  } else {
    video.style.display = 'block';
    videoDimmer.style.display = 'block';
    watch.style.transform = 'rotate(45deg)';
    isWatching = true;
  }
};

watch.addEventListener('click', handleButton);

video.addEventListener('click', () => video.play());

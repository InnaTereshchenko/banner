const close = document.getElementById('close');
const banner = document.getElementById('banner');

const closeBanner = () => {
  banner.style.display = 'none';
};

close.addEventListener('click', closeBanner, true);

console.log(close);
console.log(banner);

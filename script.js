let percent = 0;
const loadingText = document.getElementById('loadingText');
const loadingScreen = document.getElementById('loadingScreen');
const themeBtn = document.getElementById('toggleTheme');
const background = document.querySelector('.background-emojis');

const interval = setInterval(() => {
  percent += 2;
  loadingText.innerText = `Loading... ${percent}%`;
  if (percent >= 100) {
    clearInterval(interval);
    loadingScreen.style.display = 'none';
  }
}, 50);

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  bombAnimation();
});

function bombAnimation() {
  const emojis = ['🌏', '🪐', '☄️'];
  background.innerHTML = '';
  for (let i = 0; i < 30; i++) {
    const span = document.createElement('span');
    span.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    span.style.position = 'absolute';
    span.style.left = Math.random() * window.innerWidth + 'px';
    span.style.top = Math.random() * window.innerHeight + 'px';
    span.style.fontSize = '2em';
    span.style.animation = 'explode 1s ease forwards';
    background.appendChild(span);
  }
  setTimeout(() => background.innerHTML = '', 1000);
}

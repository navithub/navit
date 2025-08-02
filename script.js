// Toggle Light/Dark
const toggleBtn = document.getElementById("toggleTheme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Fake View & Online counter (example)
let views = 1;
let online = 8;

setInterval(() => {
  views += Math.floor(Math.random() * 2);
  online = Math.floor(Math.random() * 20);
  document.getElementById("views").textContent = views;
  document.getElementById("online").textContent = online;
}, 3000);

// Loading screen
let count = 0;
const loader = document.getElementById("loader");
const counter = document.getElementById("counter");

const loading = setInterval(() => {
  counter.textContent = `${count}%`;
  count++;
  if (count > 100) {
    clearInterval(loading);
    loader.style.display = "none";
  }
}, 30);

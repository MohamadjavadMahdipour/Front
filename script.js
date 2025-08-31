// ===== Mock Games Data =====
const games = [
  { title: "Mega Slots", img: "assets/games/mega-slots.jpg" },
  { title: "Poker Pro", img: "assets/games/poker-pro.jpg" },
  { title: "Roulette Royale", img: "assets/games/roulette-royale.jpg" },
  { title: "Blackjack 21", img: "assets/games/blackjack21.jpg" }
];

// ===== Populate Games Section =====
const gameGrid = document.getElementById("gameGrid");
games.forEach(game => {
  const card = document.createElement("div");
  card.className = "game-card";
  card.innerHTML = `
    <img src="${game.img}" alt="${game.title}">
    <h3>${game.title}</h3>
    <button class="accent" onclick="alert('Play ${game.title}')">Play</button>
  `;
  gameGrid.appendChild(card);
});

// ===== Auth Modal =====
const authModal = document.getElementById("authModal");
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const closeModal = authModal.querySelector(".close");
const authTitle = document.getElementById("authTitle");
const switchToRegister = document.getElementById("switchToRegister");

loginBtn.addEventListener("click", () => {
  authTitle.textContent = "Login";
  authModal.style.display = "block";
});
registerBtn.addEventListener("click", () => {
  authTitle.textContent = "Register";
  authModal.style.display = "block";
});
closeModal.addEventListener("click", () => {
  authModal.style.display = "none";
});
window.addEventListener("click", e => {
  if (e.target === authModal) authModal.style.display = "none";
});

// Switch Login/Register inside Modal
if(switchToRegister) {
  switchToRegister.addEventListener("click", () => {
    authTitle.textContent = "Register";
  });
}

// ===== Support Form =====
const supportForm = document.getElementById("supportForm");
supportForm.addEventListener("submit", e => {
  e.preventDefault();
  alert("Support request submitted!");
  e.target.reset();
});

// ===== Theme Toggle (Light/Dark Mode) =====
const themeBtn = document.getElementById("toggleTheme");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
  themeBtn.textContent = document.body.classList.contains("dark-mode") ? "🌙" : "☀️";
});

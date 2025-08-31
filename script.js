// Mock Game Data
const games = [
  { title: "Mega Slots", img: "https://via.placeholder.com/200x150", link: "#" },
  { title: "Poker Pro", img: "https://via.placeholder.com/200x150", link: "#" },
  { title: "Roulette Royale", img: "https://via.placeholder.com/200x150", link: "#" },
  { title: "Blackjack 21", img: "https://via.placeholder.com/200x150", link: "#" }
];

// Populate Game Grid
const gameGrid = document.getElementById("gameGrid");
games.forEach(game => {
  const card = document.createElement("div");
  card.className = "game-card";
  card.innerHTML = `
    <img src="${game.img}" alt="${game.title}" />
    <h3>${game.title}</h3>
    <button class="accent" onclick="alert('Play ${game.title}')">Play</button>
  `;
  gameGrid.appendChild(card);
});

// Modal Logic
const authModal = document.getElementById("authModal");
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const closeModal = authModal.querySelector(".close");
const authTitle = document.getElementById("authTitle");

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

// Support Form
document.getElementById("supportForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Support request submitted! (This is a placeholder)");
  e.target.reset();
});


// Mock Games
const games = [
  { title: "Mega Slots", img: "https://via.placeholder.com/200x150" },
  { title: "Poker Pro", img: "https://via.placeholder.com/200x150" },
  { title: "Roulette Royale", img: "https://via.placeholder.com/200x150" },
  { title: "Blackjack 21", img: "https://via.placeholder.com/200x150" }
];

// Populate games
const gameGrid = document.getElementById("gameGrid");
games.forEach(g => {
  const card = document.createElement("div");
  card.className = "game-card";
  card.innerHTML = `<img src="${g.img}" alt="${g.title}"><h3>${g.title}</h3><button class="accent" onclick="alert('Play ${g.title}')">Play</button>`;
  gameGrid.appendChild(card);
});

// Auth modal
const authModal = document.getElementById("authModal");
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const closeModal = authModal.querySelector(".close");
const authTitle = document.getElementById("authTitle");
loginBtn.addEventListener("click", () => { authTitle.textContent="Login"; authModal.style.display="block"; });
registerBtn.addEventListener("click", () => { authTitle.textContent="Register"; authModal.style.display="block"; });
closeModal.addEventListener("click", () => { authModal.style.display="none"; });
window.addEventListener("click", e=>{ if(e.target===authModal) authModal.style.display="none"; });

// Support form
document.getElementById("supportForm").addEventListener("submit", e=>{
  e.preventDefault();
  alert("Support request submitted!");
  e.target.reset();
});

// Theme toggle
const themeBtn = document.getElementById("toggleTheme");
themeBtn.addEventListener("click", ()=>{
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
  themeBtn.textContent = document.body.classList.contains("dark-mode") ? "🌙" : "☀️";
});

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const secretMsg = document.getElementById("secretMsg");
const heartsContainer = document.querySelector(".hearts");

// Move "No" button anywhere on screen
function moveNoButton() {
  const padding = 20;

  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

// Yes click → next screen + unlock secret
yesBtn.addEventListener("click", () => {
  screen1.classList.add("hidden");
  screen2.classList.remove("hidden");

  secretMsg.classList.remove("hidden");
  secretMsg.classList.add("show");
});

// Floating emojis
const emojis = ["❤", "💖", "🦋", "🫠"];

function createHeart() {
  const heart = document.createElement("span");
  heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 30 + 26 + "px";
  heart.style.animationDuration = Math.random() * 3 + 6 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 9000);
}

setInterval(createHeart, 250);

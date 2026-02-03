const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const secretMsg = document.getElementById("secretMsg");
const heartsContainer = document.querySelector(".hearts");

// move "No" button (desktop + mobile)
function moveNoButton() {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 80 - 40;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

// yes click
yesBtn.addEventListener("click", () => {
    screen1.classList.add("hidden");
    screen2.classList.remove("hidden");

    // unlock secret message
    secretMsg.classList.remove("hidden");
    secretMsg.classList.add("show");
});

// floating hearts
function createHeart() {
    const heart = document.createElement("span");
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.animationDuration = Math.random() * 3 + 5 + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 300);

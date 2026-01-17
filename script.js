// MUSIC FIX (browser click)
document.addEventListener("click", () => {
  const bgm = document.getElementById("bgm");
  if (bgm) bgm.play();
}, { once: true });

// YES BUTTON
function goYes() {
  window.location.href = "apology.html";
}

// NO BUTTON RUN AWAY + GIF
const noBtn = document.getElementById("noBtn");
const gif = document.getElementById("angryGif");

if (noBtn) {
  noBtn.addEventListener("mouseenter", () => {
    noBtn.style.left = Math.random() * 200 - 100 + "px";
    noBtn.style.top = Math.random() * 200 - 100 + "px";
  });

  noBtn.addEventListener("click", () => {
    gif.style.display = "block";
  });
}

// HEARTS
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 600);

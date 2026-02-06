const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

// When YES is clicked
yesBtn.addEventListener("click", () => {
  message.textContent = "YAYYY 🥰 Best decision ever!! 💍💖";
  message.classList.remove("hidden");
  noBtn.style.display = "none";
});

// Make the NO button run away
noBtn.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * 300) - 150;
  const y = Math.floor(Math.random() * 150) - 75;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

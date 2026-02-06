const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

yesBtn.addEventListener("click", () => {
  message.textContent = "well done this was the only correct answer 🥰 Best decision ever!! 💍💖";
  message.classList.remove("hidden");
  noBtn.style.display = "none";
});

noBtn.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * 200) - 100;
  const y = Math.floor(Math.random() * 100) - 50;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

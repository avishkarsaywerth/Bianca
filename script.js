const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// YES → Surprise page 💘
yesBtn.addEventListener("click", () => {
  window.location.href = "surprise.html";
});

// NO → Escape mode 😈
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

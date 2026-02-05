const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// Add smooth transition for the No button
noBtn.style.transition = "left 0.3s ease, top 0.3s ease";

// YES → Surprise page 💘
yesBtn.addEventListener("click", () => {
  window.location.href = "surprise.html";
});

// NO → Escape mode 😈
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// Confetti Colors
const colors = ["#FF5733", "#FFC300", "#DAF7A6", "#C70039", "#581845", "#36CFC9"];

// Create Confetti Elements
function createConfetti() {
  const container = document.getElementById("confetti-container");

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    // Random position, color, and delay
    const size = Math.random() * 10 + 5; // 5px to 15px
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = `${Math.random() * 2 + 3}s`; // 3 to 5 seconds
    confetti.style.animationDelay = `${Math.random() * 2}s`; // 0 to 2 seconds

    container.appendChild(confetti);

    // Remove confetti after animation
    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}

// Add Event Listener to Button
const surpriseBtn = document.getElementById("surprise-btn");
surpriseBtn.addEventListener("click", () => {
  createConfetti(); // Trigger confetti animation

  // Wait for 3 seconds before navigating to the next page
  setTimeout(() => {
    window.location.href = "instagram.html"; // Navigate to the Instagram question page
  }, 3000);
});

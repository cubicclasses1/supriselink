// Motivational Quotes Array
const quotes = [
    "Believe in yourself, and you will be unstoppable!",
    "The only way to do great work is to love what you do!",
    "Success starts with self-discipline!",
    "You are capable of amazing things!",
    "Your only limit is you!"
  ];
  
  // Get elements
  const yesButton = document.getElementById("yes-btn");
  const noButton = document.getElementById("no-btn");
  const noMessageBox = document.getElementById("no-message-box");
  const yesSurpriseButton = document.getElementById("yes-surprise");
  const noSurpriseButton = document.getElementById("no-surprise");
  const motivationalBox = document.getElementById("motivational-box");
  const motivationalMessage = document.getElementById("motivational-message");
  const continueButton = document.getElementById("continue-btn");
  
  // Function to display a random motivational quote with animation
  function displayMotivationalMessage() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    motivationalMessage.textContent = randomQuote;
    motivationalBox.style.display = "block";
  }
  
  // When user clicks "No" on the Instagram question
  noButton.addEventListener("click", () => {
    noMessageBox.style.display = "block";
    motivationalBox.style.display = "none";
  });
  
  // When user clicks "Yes" to show surprise message
  yesSurpriseButton.addEventListener("click", () => {
    displayMotivationalMessage();  // Show motivational quote
    noMessageBox.style.display = "none";  // Hide surprise question
  });
  
  // When user clicks "No" to skip surprise
  noSurpriseButton.addEventListener("click", () => {
    window.location.href = "thank-you.html";  // Redirect to the thank-you page
  });
  
  // When user clicks "Continue" after motivational message
  continueButton.addEventListener("click", () => {
    window.location.href = "slide.html";  // Redirect to the slide page
  });
  
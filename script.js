document.addEventListener("DOMContentLoaded", () => {
    const popupBtn = document.getElementById("popup-btn");
    const mainContent = document.querySelector(".main-content");
    const popup = document.querySelector(".popup");
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");
    const response = document.querySelector(".response");
    const responseText = document.getElementById("response-text");
    const gift = document.getElementById("gift");
    const thankYouSection = document.querySelector(".thank-you");
  
    const motivationalQuotes = [
      "Believe in yourself and all that you are.",
      "Success is no accident.",
      "Don’t stop until you’re proud.",
      "The future depends on what you do today.",
      "You are capable of amazing things.",
      "Push yourself, because no one else will.",
      "Doubt kills more dreams than failure ever will.",
      "Dream it. Wish it. Do it.",
      "Great things never come from comfort zones.",
      "Success is the sum of small efforts repeated daily."
    ];
  
    popupBtn.addEventListener("click", () => {
      popup.classList.add("hidden");
      mainContent.classList.remove("hidden");
    });
  
    yesBtn.addEventListener("click", () => {
      responseText.textContent = "🎉 Thanks for following us! Here's your motivational gift:";
      gift.textContent = getRandomQuote();
      response.classList.remove("hidden");
      setTimeout(() => {
        window.open("https://www.instagram.com/tcc_tpc_", "_blank");
        showThankYou();
      }, 2000);
    });
  
    noBtn.addEventListener("click", () => {
      responseText.textContent = "No worries! Here's your motivational gift:";
      gift.textContent = getRandomQuote();
      response.classList.remove("hidden");
      setTimeout(showThankYou, 3000);
    });
  
    function getRandomQuote() {
      return motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    }
  
    function showThankYou() {
      response.classList.add("hidden");
      thankYouSection.classList.remove("hidden");
    }
  });
  
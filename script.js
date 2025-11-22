// Select elements
const heroText = document.querySelector(".hero-text");
const scrollMessage = document.getElementById("scrollMessage");
const serviceCards = document.querySelectorAll(".service-card");

// 1️⃣ On load, fade in the hero text
window.addEventListener("load", () => {
  heroText.classList.add("show");
});

// 2️⃣ On scroll, show scroll message and services progressively
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  // Show scroll message when user scrolls past hero
  if (scrollY > windowHeight * 0.3) {
    scrollMessage.classList.add("show");
  }

  // Show service cards one by one as they come into view
  serviceCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < window.innerHeight - 50) {
      card.classList.add("show");
    }
  });
});

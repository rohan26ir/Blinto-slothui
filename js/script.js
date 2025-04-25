document.addEventListener("DOMContentLoaded", function () {
  // Hamburger Menu Toggle
  const hamburger = document.querySelector(".hamburger");
  const navCenter = document.querySelector(".navCenter");
  const navRight = document.querySelector(".navRight");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navCenter.classList.toggle("active");
    navRight.classList.toggle("active");
  });

  // Close menu when a link or button is clicked
  const navLinks = document.querySelectorAll(".navCenter a");
  const navButtons = document.querySelectorAll(".navRight button");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navCenter.classList.remove("active");
      navRight.classList.remove("active");
    });
  });

  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navCenter.classList.remove("active");
      navRight.classList.remove("active");
    });
  });

  // FAQ Accordion
  document.querySelectorAll(".accordion").forEach((button) => {
    button.addEventListener("click", () => {
      const panel = button.nextElementSibling;
      const isActive = button.classList.contains("active");

      // Close all other panels
      document.querySelectorAll(".accordion").forEach((btn) => {
        btn.classList.remove("active");
        btn.nextElementSibling.style.display = "none";
      });

      // Toggle the clicked panel
      if (!isActive) {
        button.classList.add("active");
        panel.style.display = "block";
      }
    });
  });

  // Footer Scroll to Top
  document.querySelector(".footerCenterImg").addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Load More Testimonials
  const loadMoreBtn = document.querySelector(".loadMoreBtn");
  const hiddenCards = document.querySelectorAll(".testimonialCard[id='hiddenS'], .testimonialCard.hiddenS");

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      hiddenCards.forEach((card) => {
        card.style.display = "block";
        card.removeAttribute("id");
        card.classList.remove("hiddenS");
      });
      loadMoreBtn.parentElement.style.display = "none";
    });
  }
});
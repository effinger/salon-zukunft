// Smooth scrolling functionality
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

function toggleNav() {
  document.querySelector(".mobile-nav").classList.toggle("hidden");
  document.querySelector(".mobile-bg").classList.toggle("hidden");
  menu.classList.toggle("hidden");
}

function closeNav() {
  document.querySelector(".mobile-nav").classList.add("hidden");
  document.querySelector(".mobile-bg").classList.add("hidden");
}

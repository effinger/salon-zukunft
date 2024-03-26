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
  const menu = document.querySelector(".mobile-nav");
  menu.classList.toggle("hidden");
}

function closeNav() {
  const menu = document.querySelector(".mobile-nav");
  menu.classList.add("hidden");
}

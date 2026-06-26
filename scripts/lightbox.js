const images = [
  "P1150300.JPG",
  "P1150340.JPG",
  "P1150343.JPG",
  "P1150370.JPG",
  "P1150418.JPG",
  "P1150508.JPG",
  "P1150533.JPG",
  "P1150544.JPG",
  "P1150556.JPG",
  "P1150574.JPG",
  "P1150588.JPG",
  "P1150615.JPG",
  "P1150620.JPG",
  "P1150631.JPG",
  "P1150636.JPG",
  "P1150647.JPG",
];

let current = 0;

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCounter = document.getElementById("lightbox-counter");
const btnPrev = document.getElementById("lightbox-prev");
const btnNext = document.getElementById("lightbox-next");

function openLightbox(index) {
  current = index;
  showImage();
  lightbox.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.add("hidden");
  document.body.style.overflow = "";
}

function showImage() {
  lightboxImg.src = "img/salon-2026/" + images[current];
  lightboxCounter.textContent = (current + 1) + " / " + images.length;
  btnPrev.classList.toggle("invisible", current === 0);
  btnNext.classList.toggle("invisible", current === images.length - 1);
}

function prevImage() {
  if (current > 0) { current--; showImage(); }
}

function nextImage() {
  if (current < images.length - 1) { current++; showImage(); }
}

document.addEventListener("keydown", function (e) {
  if (lightbox.classList.contains("hidden")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") prevImage();
  if (e.key === "ArrowRight") nextImage();
});

lightbox.addEventListener("click", function (e) {
  if (e.target === lightbox) closeLightbox();
});

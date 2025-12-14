const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const images = Array.from(document.querySelectorAll(".gallery img"));
let currentIndex = 0;

// START: Swipe to scroll through photos
let startX = 0;
let endX = 0;

lightbox.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

lightbox.addEventListener("touchend", e => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const threshold = 50; // minimum px movement
  const deltaX = endX - startX;

  if (Math.abs(deltaX) < threshold) return;

  if (deltaX > 0) {
    showPrev(); // swipe right
  } else {
    showNext(); // swipe left
  }
}

// END: Swipe to scroll through photos

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    openLightbox();
  });
});

function openLightbox() {
  const img = images[currentIndex];
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  updateLightbox();
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateLightbox();
}

function updateLightbox() {
  const img = images[currentIndex];
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
}

function closeLightbox() {
  lightbox.classList.remove("active");
  document.body.style.overflow = "";
};

document.addEventListener("keydown", e => {
  if (!lightbox.classList.contains("active")) return;
  if (e.key === "ArrowRight") showNext();
  if (e.key === "ArrowLeft") showPrev();
  if (e.key === "Escape") closeLightbox();
});

lightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
  document.body.style.overflow = "";
});
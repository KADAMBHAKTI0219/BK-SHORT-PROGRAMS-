const bgImage = document.getElementById("bg-img1");

window.addEventListener("scroll", () => {
  updateImage();
});

function updateImage() {
  const scrollValue = window.scrollY;
  bgImage.style.opacity = 1 - scrollValue / 900;
  bgImage.style.backgroundSize = 160- scrollValue / 12 + "%";
}

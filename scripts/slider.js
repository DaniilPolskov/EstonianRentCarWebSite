let slideIndex = 0;
const intervalTime = 3500;

function showSlides() {
  const slides = document.querySelectorAll('.slides img');
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  const slideWidth = slides[0].clientWidth;
  document.querySelector('.slides').style.transform = `translateX(${-slideIndex * slideWidth}px)`;
}

setInterval(showSlides, intervalTime);

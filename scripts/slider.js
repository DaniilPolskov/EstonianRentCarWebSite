let slideIndex = 0;
const intervalTime = 2500;
let slides;
let intervalId;

function showSlides() {
  slides = document.querySelectorAll('.slides img');
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  const slideWidth = slides[0].clientWidth;
  document.querySelector('.slides').style.transform = `translateX(${-slideIndex * slideWidth}px)`;
}

intervalId = setInterval(showSlides, intervalTime);

document.querySelector('.prev').addEventListener('click', () => {
  clearInterval(intervalId);
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  const slideWidth = slides[0].clientWidth;
  document.querySelector('.slides').style.transform = `translateX(${-slideIndex * slideWidth}px)`;
});

document.querySelector('.next').addEventListener('click', () => {
  clearInterval(intervalId);
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  const slideWidth = slides[0].clientWidth;
  document.querySelector('.slides').style.transform = `translateX(${-slideIndex * slideWidth}px)`;
});

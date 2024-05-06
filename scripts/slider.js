let slideIndex = 0;
const intervalTime = 3500;
let slides;
let intervalId; // Переменная для хранения идентификатора интервала

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

document.querySelector('.prev').addEventListener('click', prevSlide);
document.querySelector('.next').addEventListener('click', nextSlide);

function prevSlide() {
  clearInterval(intervalId); 
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  const slideWidth = slides[0].clientWidth;
  document.querySelector('.slides').style.transform = `translateX(${-slideIndex * slideWidth}px)`;
}

function nextSlide() {
  clearInterval(intervalId); 
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  const slideWidth = slides[0].clientWidth;
  document.querySelector('.slides').style.transform = `translateX(${-slideIndex * slideWidth}px)`;
}


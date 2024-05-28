let slideIndex = 0;
const intervalTime = 3000;
const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slides img');
const indicatorsContainer = document.querySelector('.indicators');
let intervalId;

function updateSlides() {
  const slideWidth = slides[0].clientWidth;
  slidesContainer.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === slideIndex);
  });
}

function setCurrentSlide(n) {
  slideIndex = n;
  updateSlides();
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  updateSlides();
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  updateSlides();
}

function startInterval() {
  intervalId = setInterval(() => {
    nextSlide();
  }, intervalTime);
}

slides.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  dot.addEventListener('click', () => {
    clearInterval(intervalId);
    setCurrentSlide(index);
    startInterval();
  });
  indicatorsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.indicators .dot');


updateSlides();
startInterval();

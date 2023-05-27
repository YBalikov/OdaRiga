'use strict';

// Hero-carousel

const slides = document.querySelectorAll('.hero-carousel .carousel-slide'),
      next = document.querySelector('.next'),
      prev = document.querySelector('.prev');
let slideIndex = 1;

slides.forEach((slide, i) => {
    slide.style.backgroundImage = `url('pic/index photo/${i+1}.jpg')`;
});

showSlides(slideIndex);

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach(slide => slide.style.display = 'none');

    slides[slideIndex - 1].style.display = 'flex';
    console.log(slideIndex);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

next.addEventListener('click', () => {
    plusSlides(1);
});

prev.addEventListener('click', () => {
    plusSlides(-1);
});
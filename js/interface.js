'use strict';


window.addEventListener('DOMContentLoaded', function() {

    // Hero-carousel

    const heroCarousel = document.querySelector('.hero-carousel'),
        slides = document.querySelectorAll('.hero-carousel .carousel-slide'),
        carouselInner = document.querySelector('.carousel-inner'),
        next = document.querySelector('.next'),
        prev = document.querySelector('.prev');
    let slideIndex = 1;
    var direction;

    heroCarousel.style.opacity = '1';

    slides.forEach((slide, i) => {
        slide.style.backgroundImage = `url('pic/index photo/${i+1}.jpg')`;
    });

    // showSlides(slideIndex);

    // function showSlides(n) {
    //     if (n > slides.length) {
    //         slideIndex = 1;
    //     }

    //     if (n < 1) {
    //         slideIndex = slides.length;
    //     }

    //     slides.forEach(slide => slide.style.display = 'none');

    //     slides[slideIndex - 1].style.display = 'flex';
    //     console.log(slideIndex);
    // }

    // function plusSlides(n) {
    //     showSlides(slideIndex += n);
    // }

    next.addEventListener('click', () => {
        resetCarouselInterval();
        if (direction === 1) {
            carouselInner.prepend(carouselInner.lastElementChild);
            direction = -1; 
        }
        direction = -1;
        carouselInner.style.transform = 'translate(-20%)';
        heroCarousel.style.justifyContent = 'flex-start';

    });

    prev.addEventListener('click', () => {
        resetCarouselInterval();
        if (!direction || direction === -1) {
            carouselInner.appendChild(carouselInner.firstElementChild);
            direction = 1; 
        }

        heroCarousel.style.justifyContent = 'flex-end';
        carouselInner.style.transform = 'translate(20%)';
    });

    carouselInner.addEventListener('transitionend', () => {
        if (direction === -1) {
            carouselInner.appendChild(carouselInner.firstElementChild);
        } else if (direction === 1) {
            carouselInner.prepend(carouselInner.lastElementChild);
        }


        carouselInner.style.transition = 'none';
        carouselInner.style.transform = 'translate(0)';
        setTimeout(() => {
            carouselInner.style.transition = 'all 0.5s';
        });
    });

    let carouselInterval = setInterval(() => {
        if (direction === 1) {
            carouselInner.prepend(carouselInner.lastElementChild);
            direction = -1; 
        }
        direction = -1;
        carouselInner.style.transform = 'translate(-20%)';
        heroCarousel.style.justifyContent = 'flex-start';
    }, 5000);

    function resetCarouselInterval() {
        clearInterval(carouselInterval);
        carouselInterval = setInterval(() => {
            if (direction === 1) {
                carouselInner.prepend(carouselInner.lastElementChild);
                direction = -1; 
            }
            direction = -1;
            carouselInner.style.transform = 'translate(-20%)';
            heroCarousel.style.justifyContent = 'flex-start';
        }, 5000);
    }

});
function carousel (wrapper, allSlides, innerCarousel, btnNext, btnPrev) {
    const carouselWrapper = document.querySelector(wrapper),
        slides = document.querySelectorAll(allSlides),
        carouselInner = document.querySelector(innerCarousel),
        next = document.querySelector(btnNext),
        prev = document.querySelector(btnPrev);
    let direction;

    carouselWrapper.style.opacity = '1';

    slides.forEach((slide, i) => {
        slide.style.backgroundImage = `url('pic/index photo/${i + 1}.jpg')`;
    });

    next.addEventListener('click', () => {
        resetCarouselInterval();
        if (direction === 1) {
            carouselInner.prepend(carouselInner.lastElementChild);
            direction = -1;
        }
        direction = -1;
        carouselInner.style.transform = 'translate(-20%)';
        carouselWrapper.style.justifyContent = 'flex-start';
    });

    prev.addEventListener('click', () => {
        resetCarouselInterval();
        if (!direction || direction === -1) {
            carouselInner.appendChild(carouselInner.firstElementChild);
            direction = 1;
        }

        carouselWrapper.style.justifyContent = 'flex-end';
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
        carouselWrapper.style.justifyContent = 'flex-start';
    }, 5000);

    function resetCarouselInterval () {
        clearInterval(carouselInterval);
        carouselInterval = setInterval(() => {
            if (direction === 1) {
                carouselInner.prepend(carouselInner.lastElementChild);
                direction = -1;
            }
            direction = -1;
            carouselInner.style.transform = 'translate(-20%)';
            carouselWrapper.style.justifyContent = 'flex-start';
        }, 5000);
    }
}

export default carousel;

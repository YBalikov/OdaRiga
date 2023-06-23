import carousel from './modules/carousel';

window.addEventListener('DOMContentLoaded', function () {
    carousel('.hero-carousel', '.hero-carousel .carousel-slide', '.carousel-inner', '.next', '.prev');

    // Mobile navigation

    const navButton = document.querySelector('.mobile-nav-button'),
        navBar = document.querySelector('.primary-navigation');

    navButton.addEventListener('click', () => {
        const buttonState = navButton.getAttribute('data-state');

        if (buttonState === 'closed') {
            navButton.setAttribute('data-state', 'opened');
            navBar.style.transform = 'translateX(0%)';
        } else {
            navButton.setAttribute('data-state', 'closed');
            navBar.style.transform = 'translateX(100%)';
        }
    });
});

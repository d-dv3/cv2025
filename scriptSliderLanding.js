'use strict';


///////////////////////////////////////
// Slider


const slider = document.querySelector('.landingSlider');
const slides = document.querySelectorAll('.landingSlide');
const btnLeft = document.querySelector('.landingSliderLeft');
const btnRight = document.querySelector('.landingSliderRight');

let currentIndex = 0;
const slideWidth = slides[0].offsetWidth + 24; // Includes margin-right (2.4rem)

function updateSliderPosition() {
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

btnRight.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateSliderPosition();
    }
});

btnLeft.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
    }
});

// Optional: Resize listener to recalculate slide width if responsive
window.addEventListener('resize', () => {
    updateSliderPosition(); // Maintain position on resize
});




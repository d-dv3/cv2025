'use strict';

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.btnDropdown'); // Select all dropdown buttons

    // Add event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // Find the corresponding content div for the clicked button
            const content = button.nextElementSibling;

            // Toggle visibility of the content
            content.classList.toggle('hidden');
        });
    });
});



///////////////////////////////////////////////////
// 
// 

const pressMe = document.querySelector('.how-might-competitionBTN');
const contents = document.querySelector('.allContent');

pressMe.forEach((press, index) => {
    press.addEventListener('click', () => {
        contents[index].classList.toggle('hidden');
    });
});


press.addEventListener('click', () => {
    console.log('Clicked!');
    contents[index].classList.toggle('hidden');
});











// 
// 
// 
// ///////////////////////////////////////////////
/*

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".grid--5-rowsSlider");
    const btnLeft = document.querySelector(".chevron-left");
    const btnRight = document.querySelector(".chevron-right");

    let currentSlide = 0;
    const maxSlide = slides.length;

    const slideWidth = slides[0].offsetWidth + 16; // 32rem + 1.6rem margin

    const goToSlide = (slideIndex) => {
        slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    };

    btnRight.addEventListener("click", function () {
        if (currentSlide < maxSlide - 1) {
            currentSlide++;
            goToSlide(currentSlide);
        }
    });

    btnLeft.addEventListener("click", function () {
        if (currentSlide > 0) {
            currentSlide--;
            goToSlide(currentSlide);
        }
    });
});

*/


const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".grid--5-rowsSlider");
const btnLeft = document.querySelector(".chevron-left");
const btnRight = document.querySelector(".chevron-right");

let currentSlide = 0;
const maxSlide = slides.length;

const slideWidth = slides[0].offsetWidth + 16; // 32rem + 1.6rem margin

const goToSlide = (slideIndex) => {
    slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
};

btnRight.addEventListener("click", function () {
    if (currentSlide < maxSlide - 1) {
        currentSlide++;
        goToSlide(currentSlide);
    }
});

btnLeft.addEventListener("click", function () {
    if (currentSlide > 0) {
        currentSlide--;
        goToSlide(currentSlide);
    }
});








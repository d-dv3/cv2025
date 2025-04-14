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




// Get the button and the dropdown content

document.addEventListener("DOMContentLoaded", function () {
    const btnDropdownComparisons = document.querySelector('.btnDropdownComparisons');
    const analysesContentComparisons = document.querySelector('.analysesContentComparisons');

    // Add an event listener to the button to toggle visibility
    btnDropdownComparisons.addEventListener('click', function () {
        if (analysesContentComparisons.classList.contains('hidden')) {
            analysesContentComparisons.classList.remove('hidden');
        } else {
            analysesContentComparisons.classList.add('hidden');
        }
    });
});


//////////////////////////////////////////////////////////////////////////////////////////////////




function toggleDropdown() {
    const dropdown = document.querySelector('.userJourneyMap');
    dropdown.classList.toggle('visible');
}


//////////////////////////////////////////////////////////////////////////////////////////////////



// Wait for the document to load
document.addEventListener("DOMContentLoaded", function () {
    // Get the button and the dropdown
    const button = document.querySelector('.opportunitiesFromJourneyMapBtn');
    const dropdown = document.getElementById('allOpportunitiesPostIt');

    // Add an event listener to the button to toggle the dropdown visibility
    button.addEventListener('click', function () {
        // Toggle the display style between 'none' and 'grid'
        if (dropdown.style.display === 'none' || dropdown.style.display === '') {
            dropdown.style.display = 'grid';  // Show dropdown
        } else {
            dropdown.style.display = 'none';  // Hide dropdown
        }
    });
});











// BUTTON EXPERIENCE

// Get the image element
//const buttonImage = document.getElementById('buttonImage');

// Define the original, hover, and active image sources
//const originalImage = '/img/ux/uxEmpathizeBtnNoBackground.svg';
//const hoverImage = '/img/ux/uxEmpathizeBtnBackground.svg';
//const activeImage = '/img/ux/uxEmpathizeBtnBackground.svg';

// Change image on hover
// buttonImage.addEventListener('mouseenter', () => {
//buttonImage.src = hoverImage;
//});

// Revert to original image when hover ends
//buttonImage.addEventListener('mouseleave', () => {
//buttonImage.src = originalImage;
//});

// Change image on active (mousedown or click)
//buttonImage.addEventListener('mousedown', () => {
//  buttonImage.src = activeImage;
//});

// Revert to the original image after the mouse is released
//buttonImage.addEventListener('mouseup', () => {
// buttonImage.src = hoverImage;
//});

// Optionally, also revert on mouse out if needed
//buttonImage.addEventListener('mouseleave', () => {
//  buttonImage.src = originalImage;
//});




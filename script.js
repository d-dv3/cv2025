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


//////////////////////////////////////////////////////////////////////////////////////////////////


document.addEventListener('DOMContentLoaded', () => {
    const dropdownBtn = document.querySelector('.btnDropdownContacts');
    const dropdownContent = document.querySelector('.allContactsHeaderQuerie');

    dropdownBtn.addEventListener('click', () => {
        dropdownContent.classList.toggle('hidden');
    });
});












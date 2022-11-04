/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


const nav = document.getElementById("navbar__list");
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/
for(let i = 1; i <= 4; i++) 
    {
    let llist = document.createElement("li");
    let button = document.createElement("button");

    let text = document.createTextNode("Section " + i);
    llist.appendChild(text);

    llist.addEventListener('click', function()
        {
           window.scrollTo(0, (window.Height));
        });

    nav.appendChild(llist);
    }
// Build menu 

// Scroll to section on link click

// Set sections as active



// Example: Hero section animation or greeting functionality for the Home page
document.addEventListener('DOMContentLoaded', () => {
    alert('Welcome to Puspanjali Neupane\'s Portfolio!');
});
let lastScrollTop = 0;
const header = document.getElementById("Header");

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down - hide the header
        header.style.top = "-80px"; // Adjust this to match the header height
    } else {
        // Scrolling up - show the header
        header.style.top = "0";
    }

    lastScrollTop = scrollTop;
});


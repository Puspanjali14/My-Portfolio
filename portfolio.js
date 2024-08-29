// Example: Interactive functionality for Portfolio page
document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        project.addEventListener('click', () => {
            alert('You clicked on ' + project.querySelector('h3').innerText);
        });
    });
});

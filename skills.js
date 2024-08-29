// Example: Skill progress bar animation on the Skills page
document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(bar => {
        bar.style.width = bar.getAttribute('style').split(': ')[1];
    });
});

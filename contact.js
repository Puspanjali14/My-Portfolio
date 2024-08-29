// Example: Form Validation Script for Contact Page

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Basic Validation
        if (firstName.value.trim() === '') {
            alert('Please enter your first name.');
            firstName.focus();
            return false;
        }
        if (lastName.value.trim() === '') {
            alert('Please enter your last name.');
            lastName.focus();
            return false;
        }
        if (!validateEmail(email.value.trim())) {
            alert('Please enter a valid email address.');
            email.focus();
            return false;
        }
        if (message.value.trim() === '') {
            alert('Please enter your message.');
            message.focus();
            return false;
        }

        // If validation passes
        alert('Thank you for your message, ' + firstName.value + '!');

        // You can now proceed to send the form data to the server
        contactForm.submit();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    fetch('/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(result => {
        alert('Message sent successfully!');
        document.querySelector('form').reset(); // Reset form fields
    })
    .catch(error => {
        alert('Error sending message.');
        console.error('Error:', error);
    });
});

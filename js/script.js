// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function () {

    // Contact Form Validation
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission

        // Get form fields
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Simple validation
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
        } else {
            alert('Message sent successfully!');
            // Submit the form here (optional)
            // form.submit();
        }
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu ul');
    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('active');
    });

    // Smooth Scroll for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Scroll-to-top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '⬆';
    scrollToTopBtn.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

});
// JavaScript to handle mobile menu toggle
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu ul");

    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("active");
    });
});

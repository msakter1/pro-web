// JavaScript for animations and smooth scrolling
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for animation triggers
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.skill-card, .project-card').forEach((el) => {
        observer.observe(el);
    });

    // Form submission
    // Update form submission logic
    
    // const form = document.querySelector('.contact-form');
    // const successMessage = document.createElement('div');
    // successMessage.className = 'success-message';
    // successMessage.textContent = 'Message sent successfully!';
    // form.parentNode.insertBefore(successMessage, form.nextSibling);

    // form.addEventListener('submit', async function(e) {
    //     e.preventDefault();
        
    //     try {
    //         const response = await fetch(form.action, {
    //             method: 'POST',
    //             body: new FormData(form),
    //             headers: {
    //                 'Accept': 'application/json'
    //             }
    //         });

    //         if (response.ok) {
    //             successMessage.style.display = 'block';
    //             form.reset();
    //             setTimeout(() => {
    //                 successMessage.style.display = 'none';
    //             }, 5000);
    //         } else {
    //             alert('There was a problem sending your message. Please try again.');
    //         }
    //     } catch (error) {
    //         alert('There was a network error. Please try again.');
    //     }
    // });
});
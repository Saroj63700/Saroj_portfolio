// JavaScript: Contact form logic
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const successMsg = document.getElementById('formSuccess');
  
    if (contactForm) {
      contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
  
        // Show success message
        successMsg.classList.remove('hidden');
  
        // Clear form after a few seconds
        setTimeout(() => {
          contactForm.reset();
          successMsg.classList.add('hidden');
        }, 3000);
      });
    }
  });
  
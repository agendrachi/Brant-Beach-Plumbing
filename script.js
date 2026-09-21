document.addEventListener('DOMContentLoaded', () => {
  // Update footer year dynamically
  document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile Menu Toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Interactive Quote Calculator
  const calcChecks = document.querySelectorAll('.calc-check');
  const totalPriceDisplay = document.getElementById('totalPrice');

  function calculateTotal() {
    let currentTotal = 0;
    calcChecks.forEach(check => {
      if (check.checked) {
        currentTotal += parseInt(check.value, 10);
      }
    });
    totalPriceDisplay.textContent = `$${currentTotal}`;
  }

  calcChecks.forEach(check => {
    check.addEventListener('change', calculateTotal);
  });

  // Quote Form Submission Handler
  const quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('custName').value;
      const phone = document.getElementById('custPhone').value;
      const notes = document.getElementById('custNotes').value;
      const currentTotal = totalPriceDisplay.textContent;

      // Gather selected services
      let selectedServices = [];
      calcChecks.forEach(check => {
        if (check.checked) {
          selectedServices.push(check.getAttribute('data-name'));
        }
      });

      const serviceListText = selectedServices.length > 0 
        ? selectedServices.join(', ') 
        : 'General Inquiry';

      // Alert confirmation
      alert(`Thank you, ${name}!\n\nWe received your request for:\nServices: ${serviceListText}\nEstimated Starting Total: ${currentTotal}\n\nWe will call you at ${phone} shortly to confirm.`);

      // Reset form
      quoteForm.reset();
      calculateTotal();
    });
  }
});

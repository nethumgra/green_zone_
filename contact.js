// contact.js - Functionality specific to the contact page

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  const successMessage = document.getElementById('success-message');
  const closeSuccessBtn = document.getElementById('close-success');
  
  // Form validation and submission
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();
      
      // Basic validation
      let isValid = true;
      let errorFields = [];
      
      if (name === '') {
        isValid = false;
        errorFields.push('name');
        document.getElementById('name').classList.add('border-red-500');
      } else {
        document.getElementById('name').classList.remove('border-red-500');
      }
      
      if (email === '' || !isValidEmail(email)) {
        isValid = false;
        errorFields.push('email');
        document.getElementById('email').classList.add('border-red-500');
      } else {
        document.getElementById('email').classList.remove('border-red-500');
      }
      
      if (subject === '') {
        isValid = false;
        errorFields.push('subject');
        document.getElementById('subject').classList.add('border-red-500');
      } else {
        document.getElementById('subject').classList.remove('border-red-500');
      }
      
      if (message === '') {
        isValid = false;
        errorFields.push('message');
        document.getElementById('message').classList.add('border-red-500');
      } else {
        document.getElementById('message').classList.remove('border-red-500');
      }
      
      // If form is valid, submit
      if (isValid) {
        // In a real implementation, we would send this data to a server
        // For this demonstration, we'll simulate a successful submission
        
        // Show loading state on button
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Sending...';
        
        // Simulate server request delay
        setTimeout(function() {
          // Reset form
          contactForm.reset();
          
          // Reset button
          submitButton.disabled = false;
          submitButton.innerHTML = originalButtonText;
          
          // Show success message
          successMessage.classList.remove('hidden');
          document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        }, 1500);
      } else {
        // Focus on the first error field
        if (errorFields.length > 0) {
          document.getElementById(errorFields[0]).focus();
        }
      }
    });
  }
  
  // Close success message
  if (closeSuccessBtn) {
    closeSuccessBtn.addEventListener('click', function() {
      successMessage.classList.add('hidden');
      document.body.style.overflow = 'auto'; // Enable scrolling again
    });
    
    // Close when clicking outside the content
    successMessage.addEventListener('click', function(e) {
      if (e.target === successMessage) {
        successMessage.classList.add('hidden');
        document.body.style.overflow = 'auto';
      }
    });
  }
  
  // Input field validation on change
  const formInputs = contactForm ? contactForm.querySelectorAll('input, textarea') : [];
  formInputs.forEach(input => {
    input.addEventListener('input', function() {
      validateField(this);
    });
    
    input.addEventListener('blur', function() {
      validateField(this);
    });
  });
  
  // Helper function to validate an email address
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Helper function to validate a field
  function validateField(field) {
    const value = field.value.trim();
    
    if (field.id === 'name' && value === '') {
      field.classList.add('border-red-500');
      return false;
    } else if (field.id === 'email' && (value === '' || !isValidEmail(value))) {
      field.classList.add('border-red-500');
      return false;
    } else if ((field.id === 'subject' || field.id === 'message') && value === '') {
      field.classList.add('border-red-500');
      return false;
    } else {
      field.classList.remove('border-red-500');
      return true;
    }
  }
  
  // Initialize Google Maps (in a real implementation)
  // This is a placeholder for where you would initialize a map with a real API key
  function initMap() {
    // In a real implementation, this would use a Google Maps API key to show the location
    console.log('Map initialization would go here in a real implementation');
  }
  
  // FAQ accordion functionality (additional to the one in main.js)
  // This is already handled in main.js, but adding a note here for clarity
});

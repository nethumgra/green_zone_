// main.js - Core functionality shared across all pages

document.addEventListener('DOMContentLoaded', function() {
  // Add page transition effect
  document.body.classList.add('page-transition-enter-active');
  
  // Preloader
  const showPreloader = () => {
    const preloader = document.createElement('div');
    preloader.className = 'fixed inset-0 bg-background flex items-center justify-center z-50';
    preloader.id = 'preloader';
    
    const loaderHTML = `
      <div class="text-center">
        <div class="loader mb-4">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p class="text-primary font-medium animate-pulse">Loading Green Zone...</p>
      </div>
    `;
    
    preloader.innerHTML = loaderHTML;
    document.body.appendChild(preloader);
    
    setTimeout(() => {
      preloader.style.opacity = '0';
      preloader.style.transition = 'opacity 0.5s ease';
      setTimeout(() => {
        preloader.remove();
      }, 500);
    }, 800);
  };
  
  showPreloader();
  
  // Enhanced Mobile menu toggle with animation
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
      // Toggle icon between bars and x with animation
      const icon = mobileMenuButton.querySelector('i');
      if (icon.classList.contains('fa-bars')) {
        icon.style.transform = 'rotate(90deg)';
        setTimeout(() => {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
          icon.style.transform = 'rotate(0deg)';
        }, 150);
      } else {
        icon.style.transform = 'rotate(90deg)';
        setTimeout(() => {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
          icon.style.transform = 'rotate(0deg)';
        }, 150);
      }
    });
  }
  
  // Enhanced Header scroll behavior with subtle animations
  const header = document.querySelector('header');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      if (!header.classList.contains('scrolled')) {
        header.classList.add('py-2', 'shadow-xl', 'scrolled');
        header.classList.remove('py-4');
        header.style.backgroundColor = 'rgba(75, 127, 82, 0.95)';
      }
    } else {
      if (header.classList.contains('scrolled')) {
        header.classList.remove('py-2', 'shadow-xl', 'scrolled');
        header.classList.add('py-4');
        header.style.backgroundColor = '#4B7F52';
      }
    }
  });
  
  // Enhanced Parallax effect for hero section
  const parallaxBg = document.querySelector('.parallax-bg');
  if (parallaxBg) {
    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
      const translateY = Math.min(scrollPosition * 0.4, 300); // Limit the movement
      parallaxBg.style.transform = `translateY(${translateY}px)`;
      
      // Add subtle opacity change for depth effect
      const opacity = Math.max(0.7, 1 - (scrollPosition * 0.001));
      parallaxBg.style.opacity = opacity;
    });
  }
  
  // Enhanced FAQ accordion functionality
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      const icon = this.querySelector('i');
      
      // Toggle the answer visibility with smooth transition
      if (answer.classList.contains('hidden')) {
        answer.classList.remove('hidden');
        
        // Animate the icon rotation
        icon.style.transform = 'rotate(180deg)';
        
        // Add highlight effect
        this.classList.add('bg-primary/5');
        
        // Close other answers with smooth transitions
        faqQuestions.forEach(otherQuestion => {
          if (otherQuestion !== question) {
            const otherAnswer = otherQuestion.nextElementSibling;
            const otherIcon = otherQuestion.querySelector('i');
            
            if (!otherAnswer.classList.contains('hidden')) {
              otherAnswer.classList.add('hidden');
              otherIcon.style.transform = 'rotate(0deg)';
              otherQuestion.classList.remove('bg-primary/5');
            }
          }
        });
      } else {
        answer.classList.add('hidden');
        icon.style.transform = 'rotate(0deg)';
        this.classList.remove('bg-primary/5');
      }
    });
    
    // Add hover effect
    question.addEventListener('mouseenter', function() {
      if (!this.nextElementSibling.classList.contains('hidden')) return;
      this.classList.add('bg-primary/5');
    });
    
    question.addEventListener('mouseleave', function() {
      if (!this.nextElementSibling.classList.contains('hidden')) return;
      this.classList.remove('bg-primary/5');
    });
  });
  
  // Enhanced Testimonial slider functionality with improved animations
  const testimonialWrapper = document.querySelector('.testimonial-wrapper');
  const testimonialSlides = document.querySelectorAll('.testimonial-slide');
  const testimonialPrev = document.querySelector('.testimonial-prev');
  const testimonialNext = document.querySelector('.testimonial-next');
  const testimonialDots = document.querySelectorAll('.testimonial-dot');
  
  if (testimonialWrapper && testimonialSlides.length > 0) {
    let currentSlide = 0;
    const slideCount = testimonialSlides.length;
    let autoSlideInterval;
    
    // Add transition effect to the wrapper
    testimonialWrapper.style.transition = 'transform 0.5s ease-in-out';
    
    // Set initial slide and active state
    updateSlidePosition();
    
    // Enhanced next button with animation
    if (testimonialNext) {
      testimonialNext.addEventListener('click', function() {
        clearInterval(autoSlideInterval); // Reset auto slide timer on user interaction
        
        // Add click animation
        this.classList.add('scale-90');
        setTimeout(() => {
          this.classList.remove('scale-90');
        }, 200);
        
        currentSlide = (currentSlide + 1) % slideCount;
        updateSlidePosition();
        startAutoSlide(); // Restart auto slide
      });
    }
    
    // Enhanced previous button with animation
    if (testimonialPrev) {
      testimonialPrev.addEventListener('click', function() {
        clearInterval(autoSlideInterval); // Reset auto slide timer on user interaction
        
        // Add click animation
        this.classList.add('scale-90');
        setTimeout(() => {
          this.classList.remove('scale-90');
        }, 200);
        
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        updateSlidePosition();
        startAutoSlide(); // Restart auto slide
      });
    }
    
    // Enhanced dot navigation with animation
    if (testimonialDots.length > 0) {
      testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
          clearInterval(autoSlideInterval); // Reset auto slide timer on user interaction
          
          // Add click animation
          this.classList.add('scale-125');
          setTimeout(() => {
            this.classList.remove('scale-125');
          }, 200);
          
          currentSlide = index;
          updateSlidePosition();
          startAutoSlide(); // Restart auto slide
        });
      });
    }
    
    // Start auto slide on load
    startAutoSlide();
    
    // Function to start auto slide
    function startAutoSlide() {
      clearInterval(autoSlideInterval);
      autoSlideInterval = setInterval(function() {
        currentSlide = (currentSlide + 1) % slideCount;
        updateSlidePosition();
      }, 6000); // Slightly longer interval for better user experience
    }
    
    // Pause auto slide on hover
    testimonialWrapper.addEventListener('mouseenter', function() {
      clearInterval(autoSlideInterval);
    });
    
    // Resume auto slide when mouse leaves
    testimonialWrapper.addEventListener('mouseleave', function() {
      startAutoSlide();
    });
    
    // Enhanced slide position update with animation
    function updateSlidePosition() {
      // Update slide position with smoother animation
      testimonialWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
      
      // Update active state for current slide
      testimonialSlides.forEach((slide, index) => {
        if (index === currentSlide) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });
      
      // Update dots with enhanced animation
      testimonialDots.forEach((dot, index) => {
        if (index === currentSlide) {
          dot.classList.add('bg-primary');
          dot.classList.remove('bg-gray-300');
          dot.classList.add('scale-125');
          setTimeout(() => {
            dot.classList.remove('scale-125');
          }, 300);
        } else {
          dot.classList.remove('bg-primary', 'scale-125');
          dot.classList.add('bg-gray-300');
        }
      });
    }
  }
  
  // Enhanced Scroll reveal animations with different animation types
  const revealElements = document.querySelectorAll('.reveal-on-scroll, .fade-in-left, .fade-in-right, .fade-in-bottom');
  
  const revealOnScroll = function() {
    for (let i = 0; i < revealElements.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = revealElements[i].getBoundingClientRect().top;
      const elementVisible = 100; // Show elements a bit earlier
      
      if (elementTop < windowHeight - elementVisible) {
        // Add a slight delay for cascading effect based on position
        const delay = revealElements[i].dataset.delay || 0;
        setTimeout(() => {
          revealElements[i].classList.add('active');
        }, delay);
      }
    }
  };
  
  // Throttle scroll events for better performance
  let scrollTimeout;
  window.addEventListener('scroll', function() {
    if (!scrollTimeout) {
      scrollTimeout = setTimeout(function() {
        revealOnScroll();
        scrollTimeout = null;
      }, 20);
    }
  });
  
  // Trigger once on load
  setTimeout(revealOnScroll, 300);
  
  // Enhanced Smooth scrolling for anchor links with better easing
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Add highlight effect to the target
        const highlightElement = () => {
          targetElement.classList.add('bg-primary/10');
          setTimeout(() => {
            targetElement.classList.remove('bg-primary/10', 'transition-all', 'duration-1000');
          }, 1500);
        };
        
        // Smooth scroll with callback
        const headerOffset = 100; // Account for header
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Wait for scroll to complete then highlight
        setTimeout(highlightElement, 800);
      }
    });
  });
  
  // Add Counter Animation for numbers
  const animateCounter = (element, target, duration = 2000) => {
    if (!element) return;
    
    let start = 0;
    const increment = target / (duration / 16); // 60fps
    const startTime = performance.now();
    
    const updateCounter = (timestamp) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentCount = Math.floor(easedProgress * target);
      
      if (currentCount !== start) {
        element.textContent = currentCount.toLocaleString();
        start = currentCount;
      }
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target.toLocaleString();
      }
    };
    
    requestAnimationFrame(updateCounter);
  };
  
  // Apply to all counter elements when they become visible
  const counterElements = document.querySelectorAll('[data-counter]');
  
  const animateCountersOnScroll = () => {
    counterElements.forEach(counter => {
      if (counter.classList.contains('counted')) return;
      
      const rect = counter.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const target = parseInt(counter.getAttribute('data-counter'), 10);
        animateCounter(counter, target);
        counter.classList.add('counted');
      }
    });
  };
  
  window.addEventListener('scroll', animateCountersOnScroll);
  setTimeout(animateCountersOnScroll, 500);
  
  // Add image hover zoom effect to all appropriate containers
  const addImageHoverEffects = () => {
    document.querySelectorAll('.product-card .h-64, .team-member .h-64').forEach(container => {
      if (!container.classList.contains('img-hover-zoom')) {
        container.classList.add('img-hover-zoom');
      }
    });
  };
  
  addImageHoverEffects();
  
  // Add floating animations to certain elements
  const addFloatingAnimations = () => {
    // Add to hero CTAs
    const heroCtas = document.querySelectorAll('.hero-section .flex a');
    heroCtas.forEach((cta, index) => {
      // Stagger the animations
      setTimeout(() => {
        cta.classList.add('animate-float');
      }, index * 200);
    });
    
    // Add to feature card icons
    document.querySelectorAll('.feature-card .bg-tertiary').forEach(icon => {
      icon.classList.add('animate-pulse-slow');
    });
  };
  
  setTimeout(addFloatingAnimations, 1000);
  
  // Add responsive check for better mobile experiences
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  
  if (isReducedMotion || isMobile) {
    // Simplify animations for better performance on mobile or for users who prefer reduced motion
    document.body.classList.add('simplified-animations');
  }
});
s
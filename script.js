// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    
    const navbar = document.querySelector('.navbar .container');
    navbar.appendChild(hamburger);
    
    const navLinks = document.querySelector('.nav-links');
    
    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar scroll effect
    const navbarElement = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add/remove scrolled class based on scroll position
        if (currentScroll > 50) {
            navbarElement.classList.add('scrolled');
        } else {
            navbarElement.classList.remove('scrolled');
        }
        
        // Hide navbar on scroll down, show on scroll up
        if (currentScroll <= 0) {
            navbarElement.style.transform = 'translateY(0)';
            return;
        }
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scrolling down
            navbarElement.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbarElement.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
    
    // Animate elements when they come into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.feature-card, .art-item, .about-image, .healing-image');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial styles for animation
    document.querySelectorAll('.feature-card, .art-item, .about-image, .healing-image').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Run animation on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Music player functionality
    const playButton = document.querySelector('.play-button');
    if (playButton) {
        let isPlaying = false;
        const audio = new Audio('path-to-your-audio-file.mp3');
        
        playButton.addEventListener('click', () => {
            if (isPlaying) {
                audio.pause();
                playButton.innerHTML = '▶';
            } else {
                audio.play();
                playButton.innerHTML = '❚❚';
            }
            isPlaying = !isPlaying;
        });
    }
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Here you would typically send the form data to a server
            console.log('Form submitted:', formObject);
            
            // Show success message
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Message Sent!';
            submitButton.style.background = 'linear-gradient(90deg, #4CAF50, #45a049)';
            
            // Reset form
            this.reset();
            
            // Reset button after delay
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.style.background = 'linear-gradient(90deg, #FFD580, #6FFFE9)';
            }, 3000);
        });
    }
    
    // Add pulse animation to CTA buttons on hover
    const ctaButtons = document.querySelectorAll('.primary-button, .secondary-button');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.animation = 'pulse 1.5s infinite';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.animation = 'none';
        });
    });
    
    // Initialize AOS (Animate On Scroll) for any future animations
    // Note: You would need to include AOS library for this to work
    // if (typeof AOS !== 'undefined') {
    //     AOS.init({
    //         duration: 800,
    //         once: true
    //     });
    // }
    
    // Add loading animation
    const loadingScreen = document.createElement('div');
    loadingScreen.className = 'loading-screen';
    loadingScreen.innerHTML = `
        <div class="spinner">
            <div class="double-bounce1"></div>
            <div class="double-bounce2"></div>
        </div>
    `;
    
    document.body.prepend(loadingScreen);
    
    // Remove loading screen when page is fully loaded
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            loadingScreen.style.visibility = 'hidden';
            
            // Trigger animations for elements in viewport
            animateOnScroll();
        }, 1000);
    });
    
    // Add loading screen styles
    const loadingStyles = document.createElement('style');
    loadingStyles.textContent = `
        .loading-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--deep-charcoal);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: opacity 0.5s ease, visibility 0.5s ease;
        }
        
        .spinner {
            width: 80px;
            height: 80px;
            position: relative;
        }
        
        .double-bounce1, .double-bounce2 {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: linear-gradient(45deg, var(--warm-gold), var(--mint-aqua));
            opacity: 0.6;
            position: absolute;
            top: 0;
            left: 0;
            animation: sk-bounce 2.0s infinite ease-in-out;
        }
        
        .double-bounce2 {
            animation-delay: -1.0s;
            background: linear-gradient(45deg, var(--mint-aqua), var(--warm-gold));
        }
        
        @keyframes sk-bounce {
            0%, 100% { 
                transform: scale(0.0);
            } 50% { 
                transform: scale(1.0);
            }
        }
    `;
    
    document.head.appendChild(loadingStyles);
    
    // Add cursor effect
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // Add cursor styles
    const cursorStyles = document.createElement('style');
    cursorStyles.textContent = `
        .custom-cursor {
            width: 20px;
            height: 20px;
            border: 2px solid var(--mint-aqua);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            transform: translate(-50%, -50%);
            z-index: 9999;
            transition: width 0.3s, height 0.3s, background 0.3s;
            mix-blend-mode: difference;
        }
        
        a:hover ~ .custom-cursor,
        button:hover ~ .custom-cursor,
        .custom-cursor:hover {
            width: 40px;
            height: 40px;
            background: var(--mint-aqua);
            opacity: 0.3;
        }
    `;
    
    document.head.appendChild(cursorStyles);
    
    // Initialize any tooltips or popovers
    // This is a placeholder for any tooltip library you might want to use
    // Example: tippy.js, popper.js, or custom implementation
});

// Add a simple preloader for images
function preloadImages() {
    const images = [
        'https://images.unsplash.com/photo-1511671782779-c97d3d27a5d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        // Add more image paths here
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Call the preloader
preloadImages();

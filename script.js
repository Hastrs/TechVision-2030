
        // Mobile Menu Toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const nav = document.querySelector('nav');
        
        mobileMenuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
        
        // Header Scroll Effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
      // Countdown Timer (continuation)
const countdownDate = new Date('apr 15, 2025 09:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById('countdown-days').innerText = days.toString().padStart(2, '0');
    document.getElementById('countdown-hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('countdown-minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('countdown-seconds').innerText = seconds.toString().padStart(2, '0');
    
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown-days').innerText = '00';
        document.getElementById('countdown-hours').innerText = '00';
        document.getElementById('countdown-minutes').innerText = '00';
        document.getElementById('countdown-seconds').innerText = '00';
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();


// Schedule Tabs
const scheduleTabs = document.querySelectorAll('.schedule-tab');
scheduleTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        scheduleTabs.forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // In a real implementation, you would load different schedule content here
        // For demo purposes, we'll just console log the selected day
        console.log(`Selected: ${tab.textContent}`);
        
        // You could add code here to show/hide different schedule content
        // based on which day is selected
    });
});

// Scroll Animation
const fadeElements = document.querySelectorAll('.fade-in');

function checkFade() {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('appear');
        }
    });
}

window.addEventListener('scroll', checkFade);
window.addEventListener('load', checkFade);

// Form Submission
const registrationForm = document.getElementById('registration-form');
registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const company = document.getElementById('company').value;
    const jobTitle = document.getElementById('job-title').value;
    
    // In a real implementation, you would send this data to a server
    console.log('Form submitted:', { fullName, email, company, jobTitle });
    
    // Show success message
    alert('Registration successful! We look forward to seeing you at the FutureTech Summit 2024.');
    
    // Reset form
    registrationForm.reset();
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Close mobile menu if open
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
            
            // Scroll to target element
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset for header
                behavior: 'smooth'
            });
        }
    });
});

// Scroll animations
document.addEventListener('DOMContentLoaded', function() {
    // Add scroll progress bar
    const progressContainer = document.createElement('div');
    progressContainer.className = 'scroll-progress-container';
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress-bar';
    progressContainer.appendChild(progressBar);
    document.body.appendChild(progressContainer);

    // Update scroll progress bar
    window.addEventListener('scroll', function() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollProgress = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = scrollProgress + '%';
    });

    // Add scroll reveal animations
    const revealElements = document.querySelectorAll('.section-title, .project-card, .timeline-content, .education-card');
    revealElements.forEach(element => {
        element.classList.add('reveal-on-scroll');
    });

    // Add staggered reveal animations
    const staggerElements = document.querySelectorAll('.hero-buttons, .contact-info');
    staggerElements.forEach(element => {
        element.classList.add('stagger-reveal');
    });

    // Add parallax scrolling effect
    const parallaxElements = document.querySelectorAll('.hero-section, .section-divider');
    parallaxElements.forEach(element => {
        element.classList.add('parallax-scroll');
    });

    // Add floating animation to icons
    const floatingElements = document.querySelectorAll('.icon-box i');
    floatingElements.forEach(element => {
        element.classList.add('floating');
    });

    // Add 3D tilt effect to project cards
    const tiltElements = document.querySelectorAll('.project-card');
    tiltElements.forEach(element => {
        element.classList.add('tilt-effect');
    });

    // Add text reveal line animation to section titles
    const textRevealElements = document.querySelectorAll('.section-title');
    textRevealElements.forEach(element => {
        const text = element.textContent;
        element.innerHTML = '';
        element.classList.add('text-reveal-line');
        
        const span = document.createElement('span');
        span.textContent = text;
        element.appendChild(span);
    });

    // Add scroll indicator to hero section
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        const scrollIndicator = document.createElement('div');
        scrollIndicator.className = 'scroll-indicator';
        scrollIndicator.innerHTML = '<i class="fas fa-chevron-down" style="color: var(--accent-color); font-size: 24px; text-shadow: 0 0 10px var(--glow-color);"></i>';
        heroSection.appendChild(scrollIndicator);
    }

    // Add section transitions
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('section-transition');
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // Observe all elements with scroll animations
    document.querySelectorAll('.reveal-on-scroll, .stagger-reveal, .text-reveal-line').forEach(element => {
        observer.observe(element);
    });

    // Parallax scrolling effect
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        
        document.querySelectorAll('.parallax-scroll').forEach(element => {
            const speed = 0.5;
            const yPos = -(scrollTop * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
});

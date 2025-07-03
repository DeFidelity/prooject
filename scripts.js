 // Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Function to set theme based on localStorage or default
function setTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        darkModeToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 12.75a10.5 10.5 0 11-10.5-10.5c1.956 0 3.844.276 5.618.794a3.75 3.75 0 00-5.468 4.298 3.75 3.75 0 004.298 5.468A10.5 10.5 0 0112.75 21.75z" />
                                    </svg>`; // Moon icon
    } else {
        body.classList.remove('dark-mode');
        darkModeToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.364l-1.591 1.591M21 12h-2.25m-.364 6.364l-1.591-1.591M12 18.75V21m-6.364-.364l1.591-1.591M3 12H5.25m-.364-6.364l1.591 1.591M12 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>`; // Sun icon
    }
}

// Set theme on initial load
setTheme();

darkModeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
    setTheme(); // Apply the new theme
});

// Scroll Reveal Animation
const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, observerOptions);

scrollRevealElements.forEach(el => {
    observer.observe(el);
});

// Ripple Effect for buttons
document.querySelectorAll('.ripple-effect').forEach(button => {
    button.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        this.appendChild(ripple);

        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    });
});
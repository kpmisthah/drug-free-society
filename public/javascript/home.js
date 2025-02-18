
// Simple counter animation for statistics
function animateCounters() {
    const counters = [
        { element: document.getElementById('reportsCounter'), target: 1250 },
        { element: document.getElementById('schoolsCounter'), target: 85 },
        { element: document.getElementById('communitiesCounter'), target: 42 }
    ];
    
    counters.forEach(counter => {
        let current = 0;
        const increment = counter.target / 100;
        const interval = setInterval(() => {
            current += increment;
            counter.element.textContent = Math.floor(current);
            if (current >= counter.target) {
                counter.element.textContent = counter.target;
                clearInterval(interval);
            }
        }, 20);
    });
}

// Animate counters when they come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.disconnect();
        }
    });
});

observer.observe(document.querySelector('.stats-section'));
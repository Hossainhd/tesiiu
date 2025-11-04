// Update current date
document.getElementById('current-date').textContent = new Date().toLocaleDateString();

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Window resize handler
window.addEventListener('resize', function() {
    const canvas = document.getElementById('matrix-bg');
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});

// Add typing sound effect
document.addEventListener('click', function() {
    const clickSound = new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA==");
    clickSound.volume = 0.1;
    clickSound.play().catch(e => console.log("Audio play failed:", e));
});

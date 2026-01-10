document.addEventListener('DOMContentLoaded', function() {
    const startBtn = document.getElementById('startBtn');
    const featureCards = document.querySelectorAll('.feature-card');
    
    // Animate feature cards on load
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Start button interaction
    startBtn.addEventListener('click', function() {
        this.textContent = 'Loading...';
        this.style.background = 'linear-gradient(45deg, #4ecdc4, #44a08d)';
        
        setTimeout(() => {
            this.textContent = 'Ready to Deploy! 🚀';
            this.style.background = 'linear-gradient(45deg, #56ab2f, #a8e6cf)';
        }, 1500);
        
        setTimeout(() => {
            this.textContent = 'Start Learning';
            this.style.background = 'linear-gradient(45deg, #ff6b6b, #ee5a24)';
        }, 3000);
    });
    
    // Smooth scroll for better UX
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add floating animation to logo
    const logo = document.querySelector('.logo');
    setInterval(() => {
        logo.style.transform = 'translateY(-2px)';
        setTimeout(() => {
            logo.style.transform = 'translateY(0)';
        }, 1000);
    }, 2000);
});
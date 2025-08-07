
let currentSlide = 0;
const totalSlides = 3;
    
function initCarousel() {
    const carousel = document.getElementById('carousel');
    const nextBtn = document.getElementById('nextBtn');
    
    if (!carousel) return;

    nextBtn?.addEventListener('click', () => {
        currentSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
        updateCarousel();
    });

    function updateCarousel() {
        const translateX = -currentSlide * 100;
        carousel.style.transform = `translateX(${translateX}%)`;
        
        const navIndicator = document.getElementById('navIndicator');
        if (navIndicator) {
            const indicatorPosition = currentSlide * 100;
            navIndicator.style.transform = `translateX(${indicatorPosition}%)`;
        }
    }
}

function initForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        submitBtn.textContent = 'SUBMITTED';
        submitBtn.style.backgroundColor = '#22c55e';
        submitBtn.disabled = true;

        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.backgroundColor = '#FBD060';
            submitBtn.disabled = false;
            contactForm.reset();
        }, 2000);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
    initForm();
    
    const navIndicator = document.getElementById('navIndicator');
    if (navIndicator) {
        navIndicator.style.transform = 'translateX(0%)';
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        rootMargin: '0px 0px -100px 0px'
    });

    const elementsToAnimate = document.querySelectorAll(
        '.service-item, .why-item, .gallery-item, .vm-item, .commitment-list li, .service-detail-intro, .benefits-column, .process-column'
    );

    elementsToAnimate.forEach(el => observer.observe(el));
});
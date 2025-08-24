document.addEventListener('DOMContentLoaded', () => {

    const isSmallScreen = window.innerWidth <= 768;
    const workshops = document.querySelectorAll(isSmallScreen ? '.workshop-sm' : '.workshop');

    const timelineCircle = document.querySelector('.timeline-circle');
    const timelineLine = document.querySelector('.timeline-line');
    const firstSection = document.querySelector('.wp-section');

    if (!workshops.length || !timelineCircle || !timelineLine || !firstSection) {
        console.error('Missing required elements for the timeline.');
        return;
    }

    const observerOptions = {
        root: null,
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        const intersectingEntry = entries.find(entry => entry.isIntersecting);

        if (intersectingEntry) {
            const titleElement = intersectingEntry.target.querySelector('.workshop-title');
            if (titleElement) {
                const titleRect = titleElement.getBoundingClientRect();
                const timelineRect = timelineLine.getBoundingClientRect();
                const titleCenterY = titleRect.top + (titleRect.height / 2);
                const newCircleTop = titleCenterY - timelineRect.top;
                timelineCircle.style.top = `${newCircleTop}px`;
            }
        }
    }, observerOptions);

    timelineCircle.style.top = '0px';

    const topSectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                timelineCircle.style.top = '0px';
            }
        });
    }, {
        root: null,
        threshold: 0.1
    });

    topSectionObserver.observe(firstSection);

    workshops.forEach(workshop => {
        observer.observe(workshop);
    });
});
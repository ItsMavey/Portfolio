import Lenis from 'lenis';

const lenis = new Lenis({
    lerp: 0.1,           // replaces duration + easing (0–1, lower = smoother)
    smoothWheel: true,   // replaces smooth
    syncTouch: false,    // replaces smoothTouch
});

function applyParallax() {
    const scrollY = window.scrollY;
    document.querySelectorAll('[data-parallax]').forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-parallax'));
        el.style.transform = `translateY(${scrollY * speed}px)`;
    });
}

function raf(time) {
    lenis.raf(time);
    applyParallax();
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
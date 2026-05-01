import { animate, cubicBezier } from "motion";

const smooth = cubicBezier(0.25, 1, 0.5, 1);
const elastic = cubicBezier(0.34, 1.56, 0.64, 1);

function pageEntrance() {
    const reveal = document.querySelector(".page-reveal");
    const titleLine = document.querySelector(".page-title-line");
    const staggerEls = document.querySelectorAll(".page-stagger");
    const slideEls = document.querySelectorAll(".page-slide");

    if (!reveal) return;

    // Title clip-path unveil
    animate(
        reveal,
        { clipPath: ["inset(45% 0 45% 0)", "inset(0% 0 0% 0)"] },
        { duration: 0.9, delay: 0.2, easing: smooth }
    );

    // Green accent line sweep
    if (titleLine) {
        animate(
            titleLine,
            { transform: ["translateX(-50%) scaleX(0)", "translateX(-50%) scaleX(1)"] },
            { duration: 0.5, delay: 0.7, easing: elastic }
        );
    }

    // Staggered fade-up elements
    staggerEls.forEach((el, i) => {
        animate(
            el,
            { opacity: [0, 1], transform: ["translateY(25px)", "translateY(0)"] },
            { duration: 0.7, delay: 0.5 + i * 0.15, easing: smooth }
        );
    });

    // Staggered slide-in elements (from left)
    slideEls.forEach((el, i) => {
        animate(
            el,
            { opacity: [0, 1], transform: ["translateX(-20px)", "translateX(0)"] },
            { duration: 0.6, delay: 0.7 + i * 0.12, easing: smooth }
        );
    });
}

pageEntrance();
document.addEventListener("astro:page-load", pageEntrance);

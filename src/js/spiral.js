// Spiral Animation

const word = "Software Engineering Student";
const length = word.length;
const animationDuration = 5000;

word.split("").forEach((char, i) => {
    function createElement(offset) {
        const div = document.createElement("div");
        div.innerHTML = char=== " " ? "&nbsp;" : char;
        div.className = "spiral-char";
        div.style.animationDelay = `-${i * (animationDuration/length) - offset}ms`;
        return div;
    }

    document.getElementById("spiral").append(createElement(0));
    document.getElementById("spiral2").append(createElement(-1 * (animationDuration/3)));
});

document.querySelectorAll(".spiral-char").forEach((char) => {})


// Adjust the hover Hitbox width

document.querySelector(".spiralHoverHitBox").style.width =
    `${document.getElementById("spiral").getBoundingClientRect().width}px`;

// End Spiral Animation
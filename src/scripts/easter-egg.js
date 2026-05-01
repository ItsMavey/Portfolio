let typedText = "";
const targetWord = "bagel";
let isBagelMode = false;
let lastSeedTime = 0;

document.addEventListener("keydown", (e) => {
    // If we're already in bagel mode, we could either let them do it again or ignore.
    // Let's let them trigger it multiple times for fun.
    
    // ignore special keys
    if (e.key.length !== 1) return;

    typedText += e.key.toLowerCase();
    
    // keep only the last N characters
    if (typedText.length > targetWord.length) {
        typedText = typedText.slice(-targetWord.length);
    }

    if (typedText === targetWord) {
        triggerBagelMode();
    }
});

function triggerBagelMode() {
    isBagelMode = true;
    
    // 1. Enable bagel cursor
    document.body.classList.add("bagel-cursor");

    // 2. Make it rain bagels
    rainBagels();

    // 3. Enable sesame seed trail
    document.addEventListener("mousemove", spawnSesameSeed);
}

function rainBagels() {
    const numBagels = 30;
    for (let i = 0; i < numBagels; i++) {
        setTimeout(() => {
            const bagel = document.createElement("div");
            bagel.classList.add("bagel-drop");
            bagel.innerText = "🥯";
            
            // Random horizontal start position
            bagel.style.left = Math.random() * 100 + "vw";
            
            // Randomize duration slightly
            const duration = 2 + Math.random() * 2;
            bagel.style.animationDuration = `${duration}s`;
            
            // Randomize font size
            const size = 1.5 + Math.random() * 2;
            bagel.style.fontSize = `${size}rem`;

            document.body.appendChild(bagel);

            // Cleanup
            setTimeout(() => {
                bagel.remove();
            }, duration * 1000);
        }, i * 100); // stagger drops
    }
}

function spawnSesameSeed(e) {
    if (!isBagelMode) return;
    
    const now = Date.now();
    // throttle seed spawning to every 50ms
    if (now - lastSeedTime < 50) return;
    lastSeedTime = now;

    const seed = document.createElement("div");
    seed.classList.add("sesame-seed");
    
    // Adjust position so it spawns near the cursor tip
    seed.style.left = e.clientX + "px";
    seed.style.top = e.clientY + "px";
    
    // Randomize rotation
    const rot = Math.random() * 360;
    seed.style.setProperty("--rot", `${rot}deg`);

    document.body.appendChild(seed);

    // Cleanup
    setTimeout(() => {
        seed.remove();
    }, 1000);
}

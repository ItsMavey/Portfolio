const nav = document.querySelector('nav');
const mask = document.getElementById('mask');
const navWidth = nav.getBoundingClientRect().width;
const navHeight = window.innerHeight;
const midX = navWidth / 2;
const midY = navHeight / 2;

const initial = `M${midX},0 L${navWidth},0 L${navWidth},${navHeight} L0,${navHeight} Q${midX},${midY} ${midX},0 Z`;
const final = `M0,0 L${navWidth},0 L${navWidth},${navHeight} L${navWidth},${navHeight} Q${navWidth},${midY} ${navWidth},0 Z`;

const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
path.setAttribute('d', initial);
path.setAttribute('fill', 'black');
path.setAttribute('fill-rule', 'evenodd');
mask.appendChild(path);

function Nav() {
    const navActive = nav.classList.toggle('active');
    const to = navActive ? final : initial;
    const duration = navActive ? 1000 : 800;

    anime({
        targets: path,
        d: to,
        duration: duration,
        easing: 'cubicBezier(0.4, 0, 0.2, 1)',
    });
}



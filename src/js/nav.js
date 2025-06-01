const nav = document.querySelector('nav');
const mask = document.getElementById('mask');
const navWidth  = nav.getBoundingClientRect().width;
const navHeight = window.innerHeight;

const initial =
    `M${navWidth/2},0 
   H${navWidth} 
   V${navHeight} 
   H0 
   Q${navWidth/2},${navHeight/2} ${navWidth/2},0 
   Z`;

const final =
    `M0,0 
   H${navWidth} 
   V${navHeight} 
   H${navWidth} 
   Q${navWidth},${navHeight/2} ${navWidth},0 
   Z`;

const path = document.createElementNS('http://www.w3.org/2000/svg','path');
path.setAttribute('d', initial);
path.setAttribute('fill', 'black');

path.setAttribute('fill-rule', 'evenodd');

mask.appendChild(path);

function Nav() {
    nav.classList.toggle('active');
    const from = nav.classList.contains('active') ? initial : final;
    const to   = nav.classList.contains('active') ? final   : initial;

    path.setAttribute('d', from);

    anime({
        targets: path,
        d: [{ value: to }],
        duration: 700,
        easing: 'easeInOutQuad'
    });
}
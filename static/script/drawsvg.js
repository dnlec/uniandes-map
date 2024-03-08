import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const svg = document.getElementById('svg');
const points = ['ML', 'SD', 'W', 'Ts'];
let d = ``;



const calculatePathPosition = () => {

    d = ``;

    points.forEach((idPoint, index) => {
        // Get the icon element
        const icon = document.querySelector(`.${idPoint}`);


        // Calculate the position of the icon
        const x = icon.offsetLeft + 10;
        const y = icon.offsetTop + 10;

        if (index === 0) {
            d += `M ${x} ${y} `;
        } else {
            d += `L ${x} ${y} `;
        }
    })




    let path3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path3.setAttribute('d', d);
    path3.setAttribute('style', 'stroke:black;fill:none;stroke-width:5');
    svg.appendChild(path3);


    let length = path3.getTotalLength();
// Clear any previous transition
    path3.style.transition = path3.style.WebkitTransition = 'none';
// Set up the starting positions
    path3.style.strokeDasharray = length + ' ' + length;
    path3.style.strokeDashoffset = `${length}`;
// Trigger a layout so styles are calculated & the browser
// picks up the starting position before animating
    path3.getBoundingClientRect();
// Define our transition
    path3.style.transition = path3.style.WebkitTransition =
        'stroke-dashoffset 3.4s ease-in-out';
// Go!
    path3.style.strokeDashoffset = '0';


    let circle3 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle3.setAttribute('r', '5');
    circle3.setAttribute('fill', 'red');


    let animation3 = document.createElementNS('http://www.w3.org/2000/svg', 'animateMotion');
    animation3.setAttribute('dur', "3s");
    animation3.setAttribute('repeatCount', 'indefinite');
    animation3.setAttribute('path', d);

    circle3.appendChild(animation3);

    svg.appendChild(circle3);

};




window.addEventListener('load', () => {
    d3.selectAll('path').remove();
    calculatePathPosition();
});

window.addEventListener('resize', () => {
    d3.selectAll('path').remove();
    // d3.selectAll('circle').remove();
    calculatePathPosition();
});









const svg = document.getElementById('svg');
let path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
path1.setAttribute('d', 'M 0 0 L 600 600');
path1.setAttribute('style', 'stroke:black;fill:none; stroke-width: 3');
svg.appendChild(path1);

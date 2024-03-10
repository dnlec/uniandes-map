// Seleccionar todos los elementos con la clase icono y tooltipp
const iconos = document.querySelectorAll(".icono");
const tooltipps = document.querySelectorAll('.tooltipp');


const calcularPosicionTooltipp = () => {

    for(let i = 0; i <iconos.length; i++) {
        // Calculamos las coordenadas del icono.
        const x = iconos[i].offsetLeft;
        const y =  iconos[i].offsetTop;

        // Calculamos el tamaño del tooltip.
        const anchoTooltipp = tooltipps[i].clientWidth;
        const altoTooltipp = tooltipps[i].clientHeight;

        // Calculamos donde posicionaremos el tooltip.
        const izquierda = x - (anchoTooltipp / 2) + 5;
        const arriba = y - altoTooltipp - 25;

        tooltipps[i].style.left = `${izquierda}px`;
        tooltipps[i].style.top = `${arriba}px`;
    }
};

window.addEventListener('load', () => calcularPosicionTooltipp());
window.addEventListener('resize', () => calcularPosicionTooltipp());


for(let i = 0; i < iconos.length; i++) {
    iconos[i].addEventListener('mouseenter', () => {
        tooltipps[i].classList.add('activo');
        calcularPosicionTooltipp();
    });
}


let timer = new Array(iconos.length);

for(let i = 0; i < iconos.length; i++) {
    iconos[i].addEventListener('mouseleave', () => {
        timer[i] = setTimeout(() => {
            tooltipps[i].classList.remove('activo');
        }, 200);
    })
}

for(let i = 0; i < tooltipps.length; i++) {
    tooltipps[i].addEventListener('mouseenter', () => clearTimeout(timer[i]));
    tooltipps[i].addEventListener('mouseleave', () => tooltipps[i].classList.remove('activo'));
}











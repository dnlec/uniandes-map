


const icons = document.querySelectorAll('.icono');

const rows = document.querySelectorAll('tr');


const scaleIcon = (icon) => {
    icon.classList.add('expand');
    let timer2 = setTimeout(() => {
        icon.classList.remove('expand');
    }, 4000);
}
const searchPoint = (row) => {
    const cells = row.cells;
    const id = cells[0].innerHTML;

    for(let i = 0; i < icons.length; i++) {
        if (id === icons[i].getAttribute('id')) {
            scaleIcon(icons[i]);
            return undefined;
        }
    }
    alert("No se encuentra");
}

for(let i = 1; i < rows.length; i++) {
    rows[i].addEventListener('click', () => {
        searchPoint(rows[i]);
    })
}


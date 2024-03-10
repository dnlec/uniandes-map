const points =
    [['ML1', 'Cra 1 E #19a-70, Bogotá', 'El ML es el edificio de ingenieria y es de los mas iconicos.'],
    ['ML2', 'Cl', 'El SD es el edificio de administracion. Muy iconico tambien.'],
    ['ML3', 'Cl', 'El SD es el edificio de administracion. Muy iconico tambien.'],
    ['Sd', 'Cl. 21 #1-20, Bogotá', 'El SD es el edificio de administracion. Muy iconico tambien.'],
    ['W1', 'Cl. 19A #1e-37, Bogotá', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['W2', 'Cl. 19A #1e-37, Bogotá', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['S2', 'S2 direccion', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['LL1', 'inside', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['LL2', 'inside', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['S1', 'inside', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['S', 'Cl. 19A #1e-37, Bogotá', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['V', 'Cl. 19A #1e-37, Bogotá', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['U', 'Cl. 19A #1e-37, Bogotá', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['R', 'Cl. 19A #1e-37, Bogotá', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['T', 'Cl. 19A #1e-37, Bogotá', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['Tx', 'Cl. 19A #1e-37, Bogotá', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['X', 'Cl. 19A #1e-37, Bogotá', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['K', 'Cl. 19A #1e-37, Bogotá', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['P1', 'Cl. 19A #1e-37, Bogotá', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['Ga', 'Cl. 19A #1e-37, Bogotá', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['C1', 'Cl. 19A #1e-37, Bogotá', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['C2', 'Cl. 19A #1e-37, Bogotá', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['C3', 'Cl. 19A #1e-37, Bogotá', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['O', 'Cl. 19A #1e-37, Bogotá', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['Q', 'Cl. 19A #1e-37, Bogotá', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['Ip', 'Cl. 19A #1e-37, Bogotá', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['N', 'Cl. 19A #1e-37, Bogotá', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['A', 'Cl. 19A #1e-37, Bogotá', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['B', 'Cl. 19A #1e-37, Bogotá', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['Gb', 'Cl. 19A #1e-37, Bogotá', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['G', 'Cl. 19A #1e-37, Bogotá', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['Rga', 'Cl. 19A #1e-37, Bogotá', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['Rgb', 'Cl. 19A #1e-37, Bogotá', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['Rgc', 'Cl. 19A #1e-37, Bogotá', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['Mj', 'Cl. 19A #1e-37, Bogotá', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['ÑL', 'Cl. 19A #1e-37, Bogotá', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['Au', 'Cl. 19A #1e-37, Bogotá', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['Ñf', 'Cl. 19A #1e-37, Bogotá', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['Ña', 'Cl. 19A #1e-37, Bogotá', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['Cj', 'Cl. 19A #1e-37, Bogotá', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['E', 'Cl. 19A #1e-37, Bogotá', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['Ñn', 'Cl. 19A #1e-37, Bogotá', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['Ñv1', 'Cl. 19A #1e-37, Bogotá', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['Ñv2', 'Cl. 19A #1e-37, Bogotá', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['Pu', 'Cl. 19A #1e-37, Bogotá', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['Ñg', 'Cl. 19A #1e-37, Bogotá', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['Ñd', 'Cl. 19A #1e-37, Bogotá', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['H', 'Cl. 19A #1e-37, Bogotá', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['J', 'Cl. 19A #1e-37, Bogotá', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['M', 'Cl. 19A #1e-37, Bogotá', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    ['Ts', 'Cl. 19 #2a-10, Bogotá', 'Torre Seneca junto a dos torres mas, son las viviendas universitarias de Uniandes.']];

const startButton = document.querySelector("#start_point_button");
const endButton = document.querySelector("#end_point_button");

const path = JSON.parse(document.getElementById('id-list').textContent);


const selectPoint = (icon) => {
    let pointId = icon.getAttribute('id');
    if (startButton.value === "") {
        if (endButton.value === pointId) {
            alert("You cannot select the same point. Choose other");
        } else {
            startButton.value = pointId;
        }
    } else {
        if (startButton.value === pointId) {
            alert("You cannot select the same point. Choose other");
        } else {
            endButton.value = pointId;
        }
    }
}

const figure = document.getElementById('figure');
for(let i = 0; i < points.length; i++) {
    let figcaption = document.createElement('figcaption');

        let icon = document.createElement('i')
        icon.classList.add('icono', `${points[i][0]}`, 'fa-solid', 'fa-circle');
        icon.setAttribute('id', `${points[i][0]}`);
        icon.addEventListener('click', () => selectPoint(icon));

        let tooltippDiv = document.createElement('div');
        tooltippDiv.classList.add('tooltipp')

            let thumbDiv = document.createElement('div');
            thumbDiv.classList.add('thumb')

                let image = document.createElement('img');

                image.src = `/static/images/${points[i][0]}.jpg`;

            thumbDiv.appendChild(image);

            let infoDiv = document.createElement('div');
            infoDiv.classList.add('info');

                let titleH3 = document.createElement('h3');
                titleH3.classList.add('titulo');
                titleH3.innerText = points[i][0];

                let directionP = document.createElement('p');
                directionP.classList.add('direccion');
                directionP.innerText = points[i][1];

                let summaryP = document.createElement('p');
                summaryP.classList.add('resumen');
                summaryP.innerText = points[i][2];

                let buttonDiv = document.createElement('div');
                buttonDiv.classList.add('contenedor-btn');

                    let button = document.createElement('button');
                    button.innerText = 'Ver Planos';

                buttonDiv.appendChild(button);

            infoDiv.appendChild(titleH3);
            infoDiv.appendChild(directionP);
            infoDiv.appendChild(summaryP);
            infoDiv.appendChild(buttonDiv);


        tooltippDiv.appendChild(thumbDiv);
        tooltippDiv.appendChild(infoDiv);

    figcaption.appendChild(icon);
    figcaption.appendChild(tooltippDiv);

    figure.appendChild(figcaption);
}

const connections = ['In1', 'In2', 'In3', 'In4','In5', 'In6', 'In7', 'In8','In9', 'In10', 'In11', 'In12',
    'In13', 'In14'];


if(path.length !== 0) {
    for(let i = 0; i < connections.length; i++) {
        let icon = document.createElement('i');
        icon.classList.add('iconoIn', `${connections[i]}`, 'fa-solid', 'fa-circle');
        icon.setAttribute('id', `${connections[i]}`);
        figure.appendChild(icon);
    }
}


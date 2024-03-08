const points =
    [['ML', 'Cra 1 E #19a-70, Bogotá', 'El ML es el edificio de ingenieria y es de los mas iconicos.'],
    ['SD', 'Cl. 21 #1-20, Bogotá', 'El SD es el edificio de administracion. Muy iconico tambien.'],
    ['W', 'Cl. 19A #1e-37, Bogotá', 'El W es el edificio de economia. Otro bien iconico.'],
    ['Ts', 'Cl. 19 #2a-10, Bogotá', 'Torre Seneca junto a dos torres mas, son las viviendas universitarias de Uniandes.']];

const figure = document.getElementById('figure');
for(let i = 0; i < points.length; i++) {
    let figcaption = document.createElement('figcaption');

        let icon = document.createElement('i')
        icon.classList.add('icono', `${points[i][0]}`, 'fa-solid', 'fa-circle');
        icon.setAttribute('id', `${points[i][0]}`);

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

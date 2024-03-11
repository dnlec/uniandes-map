const points =
    [['ML1', 'Cra 1 E #19a-70, Bogotá', 'El ML es la sede Facultad de Ingeniería y de la biblioteca Ramón de Zubiría'],
    ['ML2', 'Cl', 'Aqui queda el puente que conecta el ML con el W.'],
    ['ML3', 'Cl. 19A #1 Este-1 a 1 Este-99', 'Entrada lateral del ML cerca al auditorio Mario Laserna'],
    ['Sd', 'Cl. 21 #1-20, Bogotá', 'El Sd es la sede de la Facultad de Administración. Hay oficinas y bibliotecas.'],
    ['W1', 'Cl. 19A #1e-37, Bogotá', 'Este edificio es la sede de la Facultad de Economía. Tiene dos puentes, uno al ML y otro al campus.'],
    ['W2', 'Quinto Piso del W', 'Aqui queda el puente que conecta el W con el ML desde la perspectiva del W.'],
    ['S2', 'Dg. 20A #0-29 a 0-1', 'Aqui queda otro Taller de Diseño del Departamento de arte.'],
    ['LL1', 'Plazoleta Lleras', 'El LL es un edificio muy iconico debido a su particular arquitectura. Esta es una de las entradas con acceso al 3er y 2do piso.'],
    ['LL2', 'Plazoleta Lleras', 'Esta es la salida del LL rumbo al bloque L.'],
    ['S1', 'Plazoleta Richard', 'Este es un edificio compartido entre el Departamento de Arquitectura y el de Arte. Tiene estudios de diseño y una sala de cómputo.'],
    ['S', 'Plazoleta Richard', 'Este es el Departamento de Arte ubicado en el sector tradicional del Campito'],
    ['V', 'El Campito', 'En este bloque se encuentra el departamento de musica, ubicado en El campito de San José.'],
    ['U', 'Plazolet Richard', 'La capilla se construyó en 1922 y luego de su restauración en 1998 se adaptó como biblioteca.'],
    ['R', 'Plazoleta Richard', 'Este es el edificio donde se alojó la antigua fábrica de sombreros Richard, del que debe su actual nombre.'],
    ['T', 'Plazoleta Richard', 'Bloque T, Departamento de Arte y vagón del tren de la Facultad de Arquitectura.'],
    ['Tx', 'Quebrada Roosevelt', 'Este es el edificio del Departamento de Artes. Es relativamente moderno.'],
    ['X', 'Esquina al lado del Tx', 'Restaurante Villa Paulina, quinta perteneciente a la antigua fábrica de tejidos'],
    ['K', 'El Campito', 'Junto al V son los bloques donde se encuentran el Departamento de Música y la Facultad de Arquitectura.'],
    ['P1', 'Quebrada Roosevelt', 'Los bloques P y P1 serán nuevos edificios para el Departamento de Música, están en obra.'],
    ['Ga', 'Av. Circunvalar #18-62', 'Este el centro deportivo cuenta con gran variedad de espacios deportivos, entre ellos una piscina semiolímpica.'],
    ['C1', 'En el Campus', 'El bloque C es la casa de la comunidad ArqDis. Se encuentra localizado en el centro del campus; tiene una buena ubicación.'],
    ['C2', 'En el Campus', 'Esta es la parte Oeste del Bloque C. Aquí se encuentran unas escaleras.'],
    ['C3', 'En el Campus', 'Parte Este del Bloque C. Hay puentes que conectan rumbo al Bloque K o a la salida del Edificio.'],
    ['O', 'En el Campus', 'El Bloque O lleva el nombre de un matemático y hace parte del proyecto arquitectónico de la cafetería central.'],
    ['Q', 'Av. Circunvalar #18-55', 'Este es el edificio de la Facultad de Química. Hay laboratorios médicos y químicos.'],
    ['Ip', 'En el Campus', 'Aquí se encuentra el Departamento de Física, esta cerca al Q y al J.'],
    ['N', 'Subiendo la Explanada', 'Esta es la Cafetería Central de Uniandes. Cuenta con servicios de alimentación de calidad y espacio para sentarse.'],
    ['A', 'Alto de la Explanada', 'Junto al bloque J es el edificio de Ciencias Biológicas.'],
    ['B', 'Explanada San Alberto Magno', 'Fue el primer edificio adquirido por Uniandes. Actualmente alberga los laboratorios de Física, tres auditorios y salas de computadores.'],
    ['Gb', 'Cra. 1 #18A-12', 'Junto al Bloque G, el Gb también forma parte de la Facultadad de Ciencias Sociales.'],
    ['G', 'Cra. 1 #18A-12', 'Entrada al Bloque G, Edificio Roberto Franco, actualmente Facultad de Ciencias Sociales.'],
    ['Rga', 'Cra. 1 #18A-70', 'Es la sede de la Rectoría, las vicerrectorías, Admisiones y Registro, Dirección Financiera, Dirección Administrativa y Contabilidad.'],
    ['Rgb', 'En el Campus', 'Falcultad de Derecho junto al Rgc. En algún punto albergo la Facultad de Ingeniería y de Administración.'],
    ['Rgc', 'En el Campus', 'Actualmente es la sede de la Facultad de Derecho. Anteriormente perteneció a ingeniería y a administració.'],
    ['Mj', 'Cl. 19 #7', 'Aquí queda la gestión humana, se encarga de tareas administrativas, gestión y análisis de diversas situaciones.'],
    ['ÑL', 'Cl. 19 Nº 1-67', 'Esta es la Dirección de Internacionalización. Establece acuerdos internacionales con otras universidades para facilitar el intercambio académico.'],
    ['Au', 'Cra. 1 Nº 19-27', 'Aquí se puede encontrar salones y tambien la Dirección de Internacionalización.'],
    ['Ñf', 'Calle 18A #1-19 Este', 'DECA ofrece apoyo y bienestar, puedes encontrar los centros de diversidad, deportes, empleabilidad, cultura y apoyo.'],
    ['Ña', 'Calle 18A #0-19 Este.', 'La Casita Rosada es la Facultad de Educación.'],
    ['Cj', 'Cl. 18a #0-07', 'El Centro del Japón brinda un espacio para el desarrollo de clases y talleres sobre idioma japonés y cultura de de esa nación.'],
    ['E', 'Calle 18A #1-33', 'Certificaciones de estudios y notas, proceso de graduación, registro académico, trámites doble programa, transferencia interna y reintegros.'],
    ['Ñn', 'Cra. 1 #19-27', 'Es el lugar que ha estado difundiendo la cultura china, enseñado su idioma y promovido el intercambio académico entre Colombia y China'],
    ['Pu', 'Calle 18A # 0-19 Este.', 'Se encuentran el servicio de salud de Uniandes y el CIDER (Centro Interdisciplinario de Estudios sobre Desarrollo)'],
    ['Ñg', 'Calle 18 #2-65', 'Aquí se encuentra el Centro de Español. Se encarga de fortalecer la competencia comunicativa y el desarrollo de estructuras de pensamiento.'],
    ['H', 'Inicio Explanada San Alberto Magno', 'Este es el edificio del Departamento de Matemáticas. Tambien se encuentra el Observatorio Astronómico en el 4to piso.'],
    ['J', 'Explanada San Alberto Magno', 'Edificio del Departamento de Ciencias Biológicas junto al bloque A.'],
    ['M', 'Inicio Explanada San Alberto Magno', 'Proyecto que plantea un recorrido al interior del campus desde el Bloque E a través de un suelo natural.'],
    ['Ts', 'Cl. 19 #2a-10, Bogotá', 'Torre Seneca junto a dos torres mas, son las viviendas universitarias cerca a Uniandes.']];

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

                // buttonDiv.appendChild(button);

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
    'In13', 'In14', 'In15', 'In16', 'In17', 'In18', 'In19', 'In20'];


for(let i = 0; i < connections.length; i++) {
    let icon = document.createElement('i');
    icon.classList.add('iconoIn', `${connections[i]}`, 'fa-solid', 'fa-circle');
    icon.setAttribute('id', `${connections[i]}`);
    // icon.innerText = connections[i];
    figure.appendChild(icon);
}

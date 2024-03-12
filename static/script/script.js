// const startButton = document.querySelector("#start_point_button");
// const endButton = document.querySelector("#end_point_button");
//
// const path = JSON.parse(document.getElementById('id-list').textContent);
//
//
// const imageHotspot = document.querySelector(".image-hotspot");
// const imageRect = imageHotspot.getBoundingClientRect();
// const c = document.getElementById("myCanvas");
// const ctx = c.getContext("2d");
// function drawPath(path) {
//
//     if (path.length === 0){
//         return null;
//     } else {
//         let coordL = [];
//         for (let i = 0; i < path.length; i++) {
//             let element = document.getElementById(path[i]);
//             var elemRect = element.getBoundingClientRect();
//
//             let relativeLeft = elemRect.left - imageRect.left;
//             let relativeTop = elemRect.top - imageRect.top;
//
//             coordL.push(relativeLeft, relativeTop);
//         }
//
//
//         let numberOfLines = (coordL.length / 2) - 1;
//         let i = 0;
//         for (let lines = 0; lines < numberOfLines; lines++) {
//             let l1 = coordL[i];
//             let t1 = coordL[i+1];
//             let l2 = coordL[i+2];
//             let t2 = coordL[i+3];
//
//             ctx.beginPath();
//             ctx.moveTo(l1+10, t1+10);
//             ctx.lineTo(l2+10, t2+10);
//             ctx.lineWidth = 5;
//             ctx.stroke();
//             i += 2;
//         }
//     }
//
//
// }
//
//
// window.onload = function() {
//     drawPath(path);
// };
//
//

let siButton = document.getElementById('si_button');
let noButton = document.getElementById('no_button');
let mode = document.getElementById('mode');

window.addEventListener("load", function(){
    document.querySelector(".popup").style.display = "flex";
})


siButton.addEventListener('click', () => {

    document.querySelector('.popup').style.display = 'none';
    mode.value = 'Discapacitado';
})

noButton.addEventListener('click', () => {

    document.querySelector('.popup').style.display = 'none';
    mode.value = 'Normal';
})





if ( window.history.replaceState ) {
        window.history.replaceState( null, null, window.location.href);
}


// INPUT BOX
let timer_form;

document.addEventListener('input', e => {
    const el = e.target;

    if( el.matches('[data-color]') ) {
        clearTimeout(timer_form);
        timer = setTimeout(() => {
            document.documentElement.style.setProperty(`--color-${el.dataset.color}`, el.value);
        }, 100)
    }
})


document.getElementById("search_button").addEventListener("click", function(event){
    if (startButton.value === "" && endButton.value === ""){
        alert("Debes seleccionar dos puntos");
        event.preventDefault();
    } else if (startButton.value === "" || endButton.value === "") {
        alert("Debes seleccionar otro punto");
        event.preventDefault();
    }
});

let startPointButton = document.getElementById('start_point_button');
let endPointButton = document.getElementById('end_point_button');
document.getElementById('delete_button').addEventListener('click', () => {
    startPointButton.value = '';
    endPointButton.value = '';
})


function selected_building(building_id){

    if (startButton.value === "") {
        if (endButton.value === building_id) {
            alert("You cannot select the same point. Choose other");
        } else {
            startButton.value = building_id;
        }
    } else {
        if (startButton.value === building_id) {
            alert("You cannot select the same point. Choose other");
        } else {
            endButton.value = building_id;
        }
    }
}

function delete_point(point_id){
    if (point_id === "delete_start_point") {
        startButton.value = "";
    } else {
        endButton.value = "";
    }
}
















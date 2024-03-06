const startButton = document.querySelector("#start_point_button");
const endButton = document.querySelector("#end_point_button");

const path = JSON.parse(document.getElementById('id-list').textContent);


imageHotspot = document.querySelector(".image-hotspot");
const imageRect = imageHotspot.getBoundingClientRect();
const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");
function drawPath(path) {

    if (path.length === 0){
        return null;
    } else {
        let coordL = [];
        for (let i = 0; i < path.length; i++) {
            let element = document.getElementById(path[i]);
            var elemRect = element.getBoundingClientRect();

            relativeLeft = elemRect.left - imageRect.left;
            relativeTop = elemRect.top - imageRect.top;

            coordL.push(relativeLeft, relativeTop);
        }


        let numberOfLines = (coordL.length / 2) - 1;
        let i = 0;
        for (let lines = 0; lines < numberOfLines; lines++) {
            let l1 = coordL[i];
            let t1 = coordL[i+1];
            let l2 = coordL[i+2];
            let t2 = coordL[i+3];

            ctx.beginPath();
            ctx.moveTo(l1+10, t1+10);
            ctx.lineTo(l2+10, t2+10);
            ctx.lineWidth = 5;
            ctx.stroke();
            i += 2;
        }
    }


}


window.onload = function() {
    drawPath(path);
};


let start_button_pressed = false;
let end_button_pressed = false;

if ( window.history.replaceState ) {
        window.history.replaceState( null, null, window.location.href);
}



document.getElementById("search_button").addEventListener("click", function(event){
    if (startButton.value == "Inicio" && endButton.value == "Fin"){
        alert("Debes seleccionar dos puntos");
        event.preventDefault();

    } else if (startButton.value == "Inicio" || endButton.value == "Fin") {
        alert("Debes seleccionar otro punto");
        event.preventDefault();
    }
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
        start_button_pressed = false;
        // startButton.style.backgroundColor = "#c0c0c0";
    } else {
        endButton.value = "";
        end_button_pressed = false;
        // endButton.style.backgroundColor = "#c0c0c0";
    }
}








// document.getElementById("ML1").addEventListener("click", function(){
//     document.querySelector(".popup").style.display = "flex";
//
// })
//
// document.querySelector(".close").addEventListener("click", function(){
//     document.querySelector(".popup").style.display = "none";
// })


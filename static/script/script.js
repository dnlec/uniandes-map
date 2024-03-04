const startButton = document.querySelector("#start_point_button");
const endButton = document.querySelector("#end_point_button");

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


startButton.addEventListener("focus", () => {
});

endButton.addEventListener("click", () => {
});


function selected_building(building_id){

    if (startButton.value == "") {
        if (endButton.value == building_id) {
            alert("You cannot select the same point. Choose other");
        } else {
            startButton.value = building_id;
        }
    } else {
        if (startButton.value == building_id) {
            alert("You cannot select the same point. Choose other");
        } else {
            endButton.value = building_id;
        }
    }

}

function delete_point(point_id){
    if (point_id == "delete_start_point") {
        startButton.value = "";
        start_button_pressed = false;
        // startButton.style.backgroundColor = "#c0c0c0";
    } else {
        endButton.value = "";
        end_button_pressed = false;
        // endButton.style.backgroundColor = "#c0c0c0";
    }
}


/*
document.getElementById("ML1").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex";

})

document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
})
*/


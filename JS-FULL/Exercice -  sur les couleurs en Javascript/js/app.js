// container
let container = document.querySelector(".container");
// Button
let button = document.createElement("button");

let result = document.createElement("div");
let opacity = document.querySelector("#opacity"); // input type range

// créer mes différents carrés de couleur (16 couleurs)
for(let i = 1; i <= 16; i++) {
    let color = document.createElement("div");
    color.classList.add("color");
    container.append(color); // ajouter la div au container
}
let listColors = document.querySelectorAll(".color");
// resultat
result.classList.add("result");
container.append(result);

button.innerHTML = "Changer les couleurs";
container.append(button);


function changeColors() {

    for(let i=0; i<listColors.length; i++) {
        console.log("toto");

        let colorR = Math.floor(Math.random() * 256);
        let colorG = Math.floor(Math.random() * 256);
        let colorB = Math.floor(Math.random() * 256);

        listColors[i].innerHTML = `rgba(${colorR},${colorG},${colorB},`;

        listColors[i].style.backgroundColor = `rgba(${colorR},${colorG},${colorB}, 1)`; // template litterals (littéraux de gabarits) / backticks

    }

}

changeColors();

// gérer le click sur le changement de couleur
document.querySelector("button").addEventListener("click", changeColors);

for(let i = 0; i < listColors.length; i++) {

    listColors[i].addEventListener("click", function() {

        let colorValue = this.innerHTML;

        // je parcours ma listColors
        // et je récupère chaque color et je lui enlève la classe border
        // [].forEach.call(listColors, function(color) {
        //     color.classList.remove("border");
        // });

        listColors.forEach(function(color) {
            color.classList.remove("border");
        });

        // for(let i = 0; i < listColors.length; i++) {
        //     listColors[i].classList.remove("border");
        // }
        
        this.classList.add("border");
        let opacityValue = opacity.value/10;

        result.innerHTML = `
        La couleur selectionnée est le&nbsp;
            <span style='color:${colorValue} ${opacityValue})'>
            ${colorValue} </span> <span style='color:${colorValue} ${opacityValue})' id="currentOpacity"> ${opacityValue}) </span>
        `;

    });

}

opacity.addEventListener("change", function() {

    let opacityValue = this.value / 10;

    // [].forEach.call(listColors, function(color) {
    //     color.style.opacity = opacityValue;
    // });

    listColors.forEach(function(color) {
        color.style.opacity = opacityValue;
    });

    if(result.innerHTML != "") {
        let spans = document.querySelectorAll(".result span");
        [].forEach.call(spans, function(span) {
            span.style.opacity = opacityValue;
        });
    }

    let spanOpacity = document.querySelector(".opacity span");
    spanOpacity.innerHTML = opacityValue;

    document.querySelector("#currentOpacity").innerHTML = opacityValue + ")";

});
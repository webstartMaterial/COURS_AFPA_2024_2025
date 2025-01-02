// Je capte le click sur le bouton next
let next = document.querySelector(".next");

// Je capte le click sur le bouton prev
let prev = document.querySelector(".prev");

// je récupère l'ul qui doit slider
let carousel = document.querySelector(".carousel-track");

// je capte l'événément click
next.addEventListener("click", function() {

    // pour savoir ou je suis récupère moi la position de l'image (li)
    // qui a la classe active

    let listLI = document.querySelectorAll(".carousel-track li");
    let indexOfActiveIMG;
    for(let i = 0; i < listLI.length; i++) {
        if(listLI[i].classList.contains("active")) {

            if(i == listLI.length - 1) { // si le li actif est le dernier de l'itération j'ai plus d'image a afficher donc fais rien
                break;
            } else {

                indexOfActiveIMG = i; // ici je connais la position du li qui affiche l'image avant de passer à la suivante

                // comme je passe à l'image suivante
                // faut que la classe active aille à l'image suivante
                listLI[i].classList.remove("active");
                listLI[i+1].classList.add("active"); // j'ajoute la classe active au li suivant
                let currentPercentagePosition = -(indexOfActiveIMG * 100); // valeur du left actuelle
                let positionOfNextIMG = currentPercentagePosition - 100; // valeur nouvelle du left pour afficher la prochaine image
                carousel.style.left = positionOfNextIMG + "%";
                handleButton(i+1);
                break;
            }
        }
    }

});


prev.addEventListener("click", function() {

    let listLI = document.querySelectorAll(".carousel-track li");
    let indexOfActiveIMG;

    for(let i = 0; i < listLI.length; i++) {
        if(listLI[i].classList.contains("active")) {

            if(i == 0) { 
                break;
            } else {
                indexOfActiveIMG = i;
                listLI[i].classList.remove("active");
                listLI[i-1].classList.add("active");
                let currentPercentagePosition = -(indexOfActiveIMG * 100);
                console.log(currentPercentagePosition);
                let positionOfNextIMG = currentPercentagePosition + 100;
                carousel.style.left = positionOfNextIMG + "%";
                handleButton(i-1);
                break;
            }
        }
    }

});

function handleButton(buttonPosition) {

    let listButton = document.querySelectorAll(".carousel-nav button");
    // j'enlève la classe currentSlide à tous les bouttons
    for(let i = 0; i < listButton.length; i++) {
        listButton[i].classList.remove("current-slide");
    }

    // j'ajoute la classe current-slide au bouton qui à la position
    // du li active
    listButton[buttonPosition].classList.add("current-slide");

}
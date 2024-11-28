// 1 - Récupérer et variabiliser l'ensemble des éléments clickables ,<button>, dans le DOM

// let listButton = document.getElementsByTagName("button");
let listButton = document.querySelectorAll(".drum");
// let listButton = document.querySelectorAll("button");
// let listButton = document.getElementsByClassName("drum");

// 2 - Parcourir l'ensemble de ces éléments, et capter l'événement click pour chacun d'entre eux



// document.querySelectorAll(".drum")[0].addEventListener("click", function() { // fonction anonyme

//     // 3 - Au moment du click, récupérer la lettre de l'instrument cliqué, et appeler la fonction responsable de jouer un son.
//     let letter = this.innerText;
//     playSound(letter);
// });

// document.querySelectorAll(".drum")[1].addEventListener("click", function() { // fonction anonyme

//     // 3 - Au moment du click, récupérer la lettre de l'instrument cliqué, et appeler la fonction responsable de jouer un son.
//     let letter = this.innerText;
//     playSound(letter);
// });

// document.querySelectorAll(".drum")[2].addEventListener("click", function() { // fonction anonyme

//     // 3 - Au moment du click, récupérer la lettre de l'instrument cliqué, et appeler la fonction responsable de jouer un son.
//     let letter = this.innerText;
//     playSound(letter);
// });

// document.querySelectorAll(".drum")[3].addEventListener("click", function() { // fonction anonyme

//     // 3 - Au moment du click, récupérer la lettre de l'instrument cliqué, et appeler la fonction responsable de jouer un son.
//     let letter = this.innerText;
//     playSound(letter);
// });

// document.querySelectorAll(".drum")[4].addEventListener("click", function() { // fonction anonyme

//     // 3 - Au moment du click, récupérer la lettre de l'instrument cliqué, et appeler la fonction responsable de jouer un son.
//     let letter = this.innerText;
//     playSound(letter);
// });

// document.querySelectorAll(".drum")[5].addEventListener("click", function() { // fonction anonyme

//     // 3 - Au moment du click, récupérer la lettre de l'instrument cliqué, et appeler la fonction responsable de jouer un son.
//     let letter = this.innerText;
//     playSound(letter);
// });

// document.querySelectorAll(".drum")[6].addEventListener("click", function() { // fonction anonyme

//     // 3 - Au moment du click, récupérer la lettre de l'instrument cliqué, et appeler la fonction responsable de jouer un son.
//     let letter = this.innerText;
//     playSound(letter);
// });

for(let i = 0; i < listButton.length; i++) {
    let button = listButton[i]; // objet html (node noeud html)
    button.addEventListener("click", function() { // fonction anonyme

        // 3 - Au moment du click, récupérer la lettre de l'instrument cliqué, et appeler la fonction responsable de jouer un son.
        let letter = this.innerText;
        playSound(letter);
    });
}


// 4 - Capter l'événement "je presse sur une touche de mon clavier" dans le DOM

document.addEventListener("keyup", function(event) {

    // récupérer la lettre pressée
    let letterPressed = event.key;

    playSound(letterPressed);

});

// 5 - Quand une touche est pressée, récupérer la valeur de la touche, et appeler la fonction
// responsable de jouer un son.
function playSound(letterClickedOrPressed) {

    console.log(letterClickedOrPressed);

    let song;

    switch (letterClickedOrPressed) {

        case "a":
            // je joue le son a
            song = new Audio("./sounds/a.mp3");
            song.play();
            break; // pour sortir du switch case
        
        case "d":
            // je joue le son d
            song = new Audio("./sounds/d.mp3");
            song.play();
            break;

        case "j":
            // je joue le son j
            song = new Audio("./sounds/j.mp3");
            song.play();
            break;
        
        case "k":
            // je joue le son k
            song = new Audio("./sounds/k.mp3");
            song.play();
            break;

        case "l":
            // je joue le son l
            song = new Audio("./sounds/l.mp3");
            song.play();
            break;
        
        case "s":
            // je joue le son s
            song = new Audio("./sounds/s.mp3");
            song.play();
            break;
    
        case "w":
            // je joue le son w
            song = new Audio("./sounds/w.mp3");
            song.play();
            break;
        default:
            alert("Aucune lettre connue pour ce son !");
            break;
    }

    // 7 - La fonction "jouer un son" attendra en argument une lettre cliquée ou pressée, et en fonction de la lettre jouera le son correspondant.
    //Il vous faudra donc mettre en place pour cela une suite de conditions IF ou un switch case par exemple.
    // Cette fonction devra également appeler la fonction "ajouter un effet"

    animateButton(letterClickedOrPressed);

}


// 6 - Au préalable il faudra donc créer une fonction qui permettra de jouer un son, et une fonction qui permettra d'ajouter un effet à un des <button>

function animateButton(letterClickedOrPressed) {

    // 8 - La fonction "ajouter un effet" attendra en argument la lettre cliquée ou pressée depuis la fonction "jouer un son".
    // Dynamiquement, elle ira récupérer dans le DOM, le <button> ayant la classe ayant le même nom que la lettre cliquée ou pressée récupérée en argument.

    let button = document.querySelector("." + letterClickedOrPressed);

    // Une classe ".pressed" est déjà présente dans le CSS et vous permettra de modifier l'opacité et d'ajouter une ombre sur le <button> concerné.
    button.classList.add("pressed");

    //0.2 secondes après avoir ajouté cette classe, il vous faudra enlever cette classe ajoutée afin de créer cette effet de va-et-vient.

    setTimeout(function() {
        button.classList.remove("pressed");
    }, 200);

}
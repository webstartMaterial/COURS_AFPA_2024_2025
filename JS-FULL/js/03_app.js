//############################//
//                            //
//  USER FUNCTIONS            //
//                            //
//############################//


function sayHello() {

    console.log("Hello !");

}

function squareNumber() {

    return 2 * 2; // return statement
    // je peux rien avoir après le return

}

function squareNbr(number) { // argument (une variable en entrée de ma fonction)
    return number * number;
}

squareNbr(2); // 2 est récupéré en argument de la fonction on appel ça lors de l'appel un paramètre
squareNbr(12);
squareNbr(22);

function ttc(ht, tva) {
    return ht * (1 + tva);
}

ttc(100, 0.2);
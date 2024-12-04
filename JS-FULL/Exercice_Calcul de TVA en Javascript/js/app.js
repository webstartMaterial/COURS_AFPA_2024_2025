const LIST_INPUT_BUTTON = document.querySelectorAll("input[type='button']");
const LIST_INPUT_TEL = document.querySelectorAll("input[type='tel']");

const HTAmount = document.querySelector("#montantHT");
const TVAAmount = document.querySelector("#montantTVA");
const TTCAmount = document.querySelector("#montantTTC");
const TVARate = document.querySelector("#tauxTVA");

const totalTva = document.querySelector("#totalTva");

function formatInputValue(valueNonFormatted) {
    let formattedValue;

    formattedValue = valueNonFormatted.replace(",", ".");
    // si tu trouves autre chose q'un chiffre qui va de 0 à 9, un $ ou un point
    // remplace le par du vide
    formattedValue = valueNonFormatted.replace(/[^0-9$.]/g, ''); // regex (expression régulière)

    // ça me renvoit le string en chiffre car toute valeur récupérèée d'un champ est string en js
    // donc si je veux faire des calcul mathématiques je peux faire une addition avec des strings
    return Number(formattedValue);
}

function calculTVA(startingTypeAmount) {

    // je récupère la valeur de mes input types tel
    let montantHT = formatInputValue(HTAmount.value);
    let montantTVA = formatInputValue(TVAAmount.value);
    let montantTTC = formatInputValue(TTCAmount.value);
    let tauxTVA = formatInputValue(TVARate.value);


    if(startingTypeAmount == "montantHT" || startingTypeAmount == "tauxTVA") {
        montantTVA = Math.round(montantHT * tauxTVA / 100);
        montantTTC = montantTVA + montantHT;

        TVAAmount.value = montantTVA + " €";
        TTCAmount.value = montantTTC + " €"

    } else if (startingTypeAmount == "montantTVA") {
        montantHT = Math.round(montantTVA / (tauxTVA / 100));
        montantTTC = montantTVA + montantHT;

        HTAmount.value = montantHT + " €";
        TTCAmount.value = montantTTC + " €"

    } else {
        montantHT = Math.round(montantTTC / (1 + tauxTVA / 100));
        montantTVA = montantTTC - montantHT;

        HTAmount.value = montantHT + " €";
        TVAAmount.value = montantTVA + " €"

    }

    // afficher les valeurs calculées dans le texte en bas à gauche
    totalTva.innerHTML =
    `<p> 
        Montant HT = ${montantHT} <br>
        Montant TVA = ${montantTVA} <br>
        Montant TTC = ${montantTTC}
    </p>`;
}

function updateTVAAmount(tauxTVA) {
    TVARate.value = tauxTVA;
}

function reInitInputTelValue(id, symbol) {

    // je récupère l'input et sa valeur
    let input = document.getElementById(id),
        inputValue = input.value.replace("/\s/g", "");

    // si le champ duquel je viens de sortir n'a pas de valeur
    if(inputValue.length == 0) {
        // j'ajoute à ce champ un 0 plus son symobol (0 € / 0 %)
        input.value = 0 + " " + symbol;
        // si il a une valeur mais pas de symbol alors je récupère sa valeur et ajoute le symbol
    } else if(inputValue.indexOf(symbol) == -1) {
        input.value = inputValue + " " + symbol;
    }

}

// CAPTER L'ÉVÉNEMENT CLICK SUR LES BOUTONS

LIST_INPUT_BUTTON.forEach(function(button) {

    // j'écoute click sur tous mes boutons
    button.addEventListener("click", function(e) {
        console.log("toto");

        // je mets à jour le taux de tva
        // this.value
        updateTVAAmount(e.currentTarget.value); // e.currentTarget.value renvoit la valeur du champ qui a déclenché l'événement
        // je lance le calcul de tva
        calculTVA("tauxTVA");
    });

});

// CAPTER L'ÉVÉNEMENT KEYUP SUR LES INPUT TYPE TEL

LIST_INPUT_TEL.forEach(function(input) {

    // on capter l'évébement keyup pouyr chaque input type
    input.addEventListener("keyup", function(e) {
        // on appel la fonction de calcul de tva en y passant l'id
        calculTVA(e.currentTarget.id);
    });

    // quand je clique ailleurs en dehors de mon champ
    input.addEventListener("blur", function(e) {
        if(e.currentTarget.id == "tauxTVA") {
            // ici si le champ que je viens de modifier c'étiat taux tva alors je rénitialise sa valeur avec le bon format
            reInitInputTelValue(e.currentTarget.id, "%");
        } else {
            reInitInputTelValue(e.currentTarget.id, "€");
        }
    });

});
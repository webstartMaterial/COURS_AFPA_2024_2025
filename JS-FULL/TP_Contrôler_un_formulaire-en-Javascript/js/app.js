function getTooltip(elemHTML) {

    // je parcours les éléments html après notre élement html
    // a chaque fois que j'en récupère un
    // je vérifie si il a la classe tooltip
    // si c'est le cas, c'est que c'est le premier tooltip après mon champ
    // donc je le récupère
    while (elemHTML = elemHTML.nextSibling) {
        if (elemHTML.className == "tooltip") {
            return elemHTML;
            // break;
        }
    }
}

function sexe() {

    let listInputRadioSexe = document.getElementsByName("sexe"); // je récupère mes deux inputs radio
    // let listInputRadioSexe = document.querySelectorAll("input[name='sexe']");
    let tooltip = getTooltip(listInputRadioSexe[1].parentNode); // on passe l'élement parent du radio
    let radioChecked = document.querySelector("input[name='sexe']:checked");
    // si j'ai un input type radio qui a été checké alors pas d'erreur
    if (radioChecked != null) {
        tooltip.style.display = "none";
        return true;
    } else {
        tooltip.style.display = "inline-block";
        return false;
    }
    // sinon erreur
}

function checkInputText(id, min) {

    let elemHTML = document.getElementById(id);
    let val = elemHTML.value; // valeur du champ elemHTML
    let tooltip = getTooltip(elemHTML);

    if (val.length < min) {
        // mettre une bordure rouge sur le champ
        elemHTML.classList.add("incorrect");
        elemHTML.classList.remove("correct");
        // et afficher le message d'erreur
        tooltip.style.display = "inline-block";
        return false;
    } else {
        // mettre une bordure verte sur le champ
        elemHTML.classList.remove("incorrect");
        elemHTML.classList.add("correct");
        // et faire disparaitre le message d'erreur
        tooltip.style.display = "none";
        return true;
    }

}

function lastName() {
    return checkInputText("lastName", 2);
}

function firstName() {
    return checkInputText("firstName", 2);
}

function age() {

    let age = document.getElementById("age");
    let val = age.value; // valeur du champ age
    let tooltip = getTooltip(age);

    if (val < 5 || val > 140) {
        // mettre une bordure rouge sur le champ
        age.classList.add("incorrect");
        age.classList.remove("correct");
        // et afficher le message d'erreur
        tooltip.style.display = "inline-block";
        return false;
    } else {
        // mettre une bordure verte sur le champ
        age.classList.remove("incorrect");
        age.classList.add("correct");
        // et faire disparaitre le message d'erreur
        tooltip.style.display = "none";
        return true;

    }

}

function login() {
    return checkInputText("login", 4);
}

function pwd1() {
    return checkInputText("pwd1", 6);
}

function pwd2() {
    let controlOK = checkInputText("pwd2", 6);

    let pwd2 = document.getElementById("pwd2");
    let valPwd1 = document.getElementById("pwd1").value;
    let valPwd2 = pwd2.value;
    let tooltip = getTooltip(pwd2);

    if (!controlOK || valPwd1 !== valPwd2) {
        // mettre une bordure rouge sur le champ
        pwd2.classList.add("incorrect");
        pwd2.classList.remove("correct");
        // et afficher le message d'erreur
        tooltip.style.display = "inline-block";
        return false;
    } else {
        // mettre une bordure verte sur le champ
        pwd2.classList.remove("incorrect");
        pwd2.classList.add("correct");
        // et faire disparaitre le message d'erreur
        tooltip.style.display = "none";
        return true;

    }
}

function country() {

    // récupérer le select
    let country = document.getElementById("country");
    let tooltip = getTooltip(country);
    // son tooltip

    // si la valeur selectionnée n'est pas none
    // alors pas d'erreur
    if (country.value !== "none") {
        country.classList.remove("incorrect");
        country.classList.add("correct");
        // et faire disparaitre le message d'erreur
        tooltip.style.display = "none";
        return true;
    } else {
        country.classList.add("incorrect");
        country.classList.remove("correct");
        // et afficher le message d'erreur
        tooltip.style.display = "inline-block";
        return false;
    }

}

document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // annule le comportement par défaut de l'événement en cours (rechargement de la page ici)

    let lastNameOK = lastName();
    let firstNameOK = firstName();
    let loginOK = login();
    let ageOK = age();
    let pwd1OK = pwd1();
    let pwd2OK = pwd2();
    let sexeOK = sexe();
    let countryOK = country();

    console.log(lastNameOK);
    console.log(firstNameOK);
    console.log(loginOK);
    console.log(ageOK);
    console.log(pwd1OK);
    console.log(pwd2OK);
    console.log(sexeOK);
    console.log(countryOK);

    // je veux savoir si j'affiche l'alerte control ok ou pas ok

    if (lastNameOK && firstNameOK && loginOK && ageOK && pwd1OK && pwd2OK && sexeOK && countryOK) {
        alert("Controle ok");
    } else {
        alert("Control pas ok !");
    }

});



// let listInputs = document.getElementsByTagName("input");
let listInputs = document.querySelectorAll("input");

for (let i = 0; i < listInputs.length; i++) {
    listInputs[i].addEventListener("keyup", function () {
        let id = this.id;

        switch (id) {
            case "lastName":
                lastName();
                break;
            case "firstName":
                firstName();
                break;
            case "sexe":
                sexe();
                break;
            case "country":
                country();
                break;
            case "pwd1":
                pwd1();
                break;
            case "pwd2":
                pwd2();
                break;
            case "login":
                login();
                break;
            case "age":
                age();
                break;
            default:
                break;
        }

    });
}

// Vérifier le changement de valeur dans le select option country
let select = document.querySelector("select");
select.addEventListener("change", function() {
    country();
});

let listRadio = document.querySelectorAll("input[type='radio']");

for(let i = 0; i< listRadio.length; i++) {
    listRadio[i].addEventListener("change", function() {
        sexe();
    });
}



// JE CAPTE LE MOMENT DU RESET

document.getElementById("myForm").addEventListener("reset", function (event) {

    // je veux faire réapparaitre tous les messages d'erreurs
    let listTooltip = document.getElementsByClassName("tooltip");
    for(let i = 0; i < listTooltip.length; i++) {
        listTooltip[i].style.display = "inline-block";
    }

    // je veux enlever toutes les bordures rouge et verte
    let listInputs = document.querySelectorAll("input, select");
    for(let i = 0; i < listInputs.length; i++) {
        listInputs[i].classList.remove("incorrect");
        listInputs[i].classList.remove("correct");
    }

});
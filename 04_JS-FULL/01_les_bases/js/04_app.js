//############################//
//                            //
//  ARRAYS                    //
//                            //
//############################//


// EN JS TOUT EST OBJET
// STRING - INT - ARRAY - BALISE HTML

let numbers = [23, 78, 991];
let names = ["Samih", "Nicolas", "Daniel"];
let infos = [22, "Samih", true, ["armes à feu", "chasse", "pêche"]];

console.log(infos[1]); // Samih
console.log(infos[3][1]); // chasse

// push
numbers.push(22);
// slice
console.log(names.slice(1,2)); // Nicolas
// length

//############################//
//                            //
//  OBJECT CUSTOM             //
//                            //
//############################//

let monObjet = {}; // j'ai créé un objet vide
let monOjet2 = new Object(); // déclaration

let wajdi = {
    firstName : "Wajdi",
    age : 27,
    nationality : "French",
    weight: 82,
    hobbies : ["Musculation", "Les cabines téléphiniques à Londres", "Thé marocain"],
    reviserSesCours : function() {
        console.log("J'écoute mon prof Samih en bossant à la maison");
    },
    eat :function() {
        this.weight++;
    }
};

console.log(wajdi.age); // 27
console.log(wajdi.weight); // 82
wajdi.eat();
console.log(wajdi.weight); // 83

wajdi.nationality = "Tunisian";
// wajdi.health = wajdi.health - 1;
// wajdi.health -= 1;
console.log(wajdi.nationality);
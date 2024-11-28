class Person { // Pascal Naming Convention

    // IL EST APPELÉ AUTOMATIQUEMENT LORS DE L'INSTANCE D'UNE CLASSE
    constructor(firstName, name) { // permet d'initialiser des valeurs pour nos champs (propriétés objet qu'on aura)
        this.name = name;
        this.firstName = firstName;
    }

    sayHello() { // méthode
        console.log("Hey Salut, je m'appel " + this.firstName + " " + this.name);
    }

}

const albano = new Person("Albano", "Ayme"); // j'ai créé des objets à partir de l'instance de la classe Person
const wajdi = new Person("Wajdi", "Rouafi");
const florian = new Person("Florian", "Santantonio");

albano.sayHello();
wajdi.sayHello();
florian.sayHello();
<?php

// custom types (créer nos propres types d'objet)
class Cart {

    public $nbrProduct; // champ (propriété/field)

    public function addProduct() {
        return "L'article a bien été ajouté !";
    }

    public function removeProduct() {
        return "L'article a bien été supprimé !";
    }

    // public : accessible de partout (a l'extérieur de la classe)
    // private : accessible que dans la classe
    // protected :  accessible que dans la classe et dans la classe fille (héritent de la classe mère)

    public function emptyCart() {
        return "Le panier a bien été supprimé !";

    }

}

$cart = new Cart; // on a créé un objet à partir de l'instance d'une classe
$cart2 = new Cart; // on a créé un objet à partir de l'instance d'une classe
$cart3 = new Cart; // on a créé un objet à partir de l'instance d'une classe
$cart4 = new Cart; // on a créé un objet à partir de l'instance d'une classe

echo '<pre>'; 
var_dump($cart);
echo '</pre>';

echo '<pre>'; 
var_dump(get_class_methods($cart));
echo '</pre>';

echo $cart->nbrProduct;
echo $cart->addProduct();
echo $cart->removeProduct();

$cart->nbrProduct = 5;

// $pdo = new PDO("mysq");
// $pdo->query();
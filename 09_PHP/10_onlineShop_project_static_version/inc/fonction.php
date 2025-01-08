<?php

    function isUserConnected() {
        return (isset($_SESSION["user"])) ? true : false;
    }

    function isUserConnectedAndAdmin() {
        return (isUserConnected() && $_SESSION["user"]["status"] == 1) ? true : false;
    }

    function create_cart_session() {

        if(!isset($_SESSION["cart"])) {

            $_SESSION["cart"]["id_product"] = array();
            $_SESSION["cart"]["quantity"] = array();
            $_SESSION["cart"]["price"] = array();
            $_SESSION["cart"]["title"] = array();
            $_SESSION["cart"]["picture"] = array();
            $_SESSION["cart"]["stock"] = array();

            // [
            //     [1, 2, 3],
            //     [3, 4, 8],
            //     [10, 20, 33],
            //     ['thsirt 1', 'pullover 3', "short 4"],
            //     ['photo1', 'photo 2', 'photo 5'],
            //     [110, 33, 44]

            // ]

        }

    }


    function add_product($product, $quantity) {

        create_cart_session();

        $_SESSION["cart"]["id_product"][] = $product["id"];
        $_SESSION["cart"]["quantity"][] = $quantity;
        $_SESSION["cart"]["price"][] = $product["price"];
        $_SESSION["cart"]["title"][] = $product["title"];
        $_SESSION["cart"]["picture"][] = $product["picture"];
        $_SESSION["cart"]["stock"][] = $product["stock"];

    }

?>
<?php


function inclusionAuto($nomClasse) {
    // new \Controller\LivreController
    // require_once("./Controller/LivreController.php")
    require_once("./" . str_replace("\\", "/", $nomClasse) . ".php");

}

spl_autoload_register("inclusionAuto");


?>
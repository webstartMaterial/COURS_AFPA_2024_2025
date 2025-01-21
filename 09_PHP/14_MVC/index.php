<?php

    require_once("Config/Autoload.php");

    if(isset($_GET["page"]) && $_GET["page"] == "loan") {
        $repo = new \Repository\LoanRepository;
        $service = new \Service\LoanService($repo);
        $controller = new \Controller\LoanController($service);
    } else {
        $repo = new \Repository\BookRepository;
        $service = new \Service\BookService($repo);
        $controller = new \Controller\BookController($service);
    }

    $controller->route();

    // si je rentre dans le premier if, je vais afficher le contenu de list_books.php

?>

<nav>

    <ul>
        <li>
            <a href="?page=livre"> Lister les livres</a>
            <a href="?page=loan"> Lister les emprunts</a>
        </li>
    </ul>

</nav>
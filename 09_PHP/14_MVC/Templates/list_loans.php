
<h1>Liste d'emprunts</h1>

<ul>

    <?php

    foreach ($loans as $loan) {
        echo "<li>Emprunt n°:" . $loan->getBook_id() . "Date emprunt :" . $loan->getDate_loan() . "(Date retour :" .$loan->getDate_return(). ")</li>";
    }

    ?>

</ul>

<br>
<br>

<a href="?page=loan&action=add">Ajouter un Emprunt</a>

<br>
<br>
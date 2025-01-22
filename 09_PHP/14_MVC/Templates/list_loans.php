
<h1>Liste de livres</h1>

<ul>

    <?php

    foreach ($loans as $loan) {
        echo "<li>Livre n°:" . $loan->getBook_id() . "Date emprunt :" . $loan->getDate_loan() . "(Date retour :" .$loan->getDate_return(). ")</li>";
    }

    ?>

</ul>

<br>
<br>

<a href="#">Ajouter un Emprunt</a>

<br>
<br>

<h1>Liste d'emprunts</h1>

<div>
        <p style="color:green"><?= isset($msg) ? $msg : ""; ?></p>
    </div>

<ul>

    <?php

    // echo "<pre>";
    // var_dump($loans);
    // echo "</pre>";

    foreach ($loans as $loan) {
        echo "<li>Le livre " . $loan->getBookTitle() . " a été emprunté le " . $loan->getDate_loan() . "(Date retour :" .$loan->getDate_return(). ") par " . $loan->getFirstName() . " " . $loan->getLastName() . "
        <a href='?page=loan&action=delete&loan_id=" . $loan->getId() . "'>Supprimer</a>
        <a href='?page=loan&action=update&loan_id=" . $loan->getId() . "'>MAJ</a>
        </li>";
    }

    ?>

</ul>

<br>
<br>

<a href="?page=loan&action=add">Ajouter un Emprunt</a>

<br>
<br>

<h1>Liste de livres</h1>

    <div>
        <p style="color:green"><?= isset($msg) ? $msg : ""; ?></p>
    </div>

<ul>

    <?php

    foreach ($data as $book) {
        echo "<li>" . $book->getTitle() . ":" . $book->getAuthor() . "(" .$book->getYear_created_at(). ") - disponible <a href='?page=book&action=delete&book_id=" . $book->getId() . "'>Supprimer</a>
        <a href='?page=book&action=update&book_id=" . $book->getId() . "'>MAJ</a>
        </li>";
    }

    ?>

</ul>

<br>
<br>

<a href="?page=book&action=add">Ajouter un livre</a>

<br>
<br>
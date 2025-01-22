
<h1>Liste de livres</h1>

<ul>

    <?php

    foreach ($books as $book) {
        echo "<li>" . $book->getTitle() . ":" . $book->getAuthor() . "(" .$book->getYear_created_at(). ") - disponible</li>";
    }

    ?>

</ul>

<br>
<br>

<a href="#">Ajouter un livre</a>

<br>
<br>
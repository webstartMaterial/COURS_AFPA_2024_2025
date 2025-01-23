<form method="post" action="index.php?page=book&action=update">
    <input type="hidden" name="id" value="<?= $book->getId(); ?>">
    <label for="title">Titre:</label><br>
    <input type="text" id="title" name="title" value="<?= $book->getTitle(); ?>" required><br>

    <label for="author">Auteur:</label><br>
    <input type="text" id="author" name="author" value="<?= $book->getAuthor(); ?>" required><br>

    <label for="year_created_at">Année de Publication:</label><br>
    <input type="number" id="year_created_at" value="<?= $book->getYear_created_at(); ?>" name="year_created_at" required><br><br>
    <input type="submit" value="Modifier Livre">
</form>
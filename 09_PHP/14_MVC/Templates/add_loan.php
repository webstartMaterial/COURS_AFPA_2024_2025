<form method="post" action="index.php?page=emprunt&action=add">
    <label for="book_id">Sélectionnez un livre:</label><br>
    <select id="book_id" name="book_id" required>
        <?php foreach ($booksAvailable as $book) {
            echo "<option value='" . $book->getId() . "'>" . $book->getTitle() . "</option>";
        } ?>
    </select><br>
    <label for="date_return">Date de retour prévue:</label><br>
    <input type="date" id="date_return" name="date_return" required><br><br>
    <input type="submit" value="Enregistrer Emprunt">
</form>
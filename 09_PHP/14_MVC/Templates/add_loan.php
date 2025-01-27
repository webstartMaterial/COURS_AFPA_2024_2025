<form method="post" action="index.php?page=loan&action=add">
    <label for="book_id">Sélectionnez un livre:</label><br>
    <select id="book_id" name="book_id" required>
        <?php foreach ($booksAvailable as $book) {
            echo "<option value='" . $book->getId() . "'>" . $book->getTitle() . "</option>";
        } ?>
    </select><br>
    <label for="user_id">Sélectionnez un user:</label><br>
    <select id="user_id" name="user_id" required>
        <?php foreach ($users as $user) {
            echo "<option value='" . $user->getId() . "'>" . $user->getFirst_name() . " " . $user->getLast_name() . "</option>";
        } ?>
    </select><br>
    <label for="date_return">Date de retour prévue:</label><br>
    <input type="date" id="date_return" name="date_return" required><br><br>
    <input type="submit" value="Enregistrer Emprunt">
</form>
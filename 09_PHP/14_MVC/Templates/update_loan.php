<form method="post" action="index.php?page=loan&action=update">
    <input type="hidden" name="id" value="<?= $loan->getId() ?>">
    <label for="book_id">Livre emprunté</label><br>
    <input type="text" disabled id="book_id" value="<?= $loan->getBook_id() ?>" name="book_id" required><br><br>

    <label for="date_loan">Date d'emprunt:</label><br>
    <input type="date" id="date_loan" value="<?= $loan->getDate_loan() ?>" name="date_loan" required><br><br>

    <label for="date_return">Date de retour prévue:</label><br>
    <input type="date" id="date_return" value="<?= $loan->getDate_return() ?>" name="date_return" required><br><br>
    <input type="submit" value="Modifier Emprunt">
</form>
<form method="post" action="index.php?page=livre&action=add">
    <label for="title">Titre:</label><br>
    <input type="text" id="title" name="title" required><br>

    <label for="author">Auteur:</label><br>
    <input type="text" id="author" name="author" required><br>

    <label for="year_created_at">Année de Publication:</label><br>
    <input type="number" id="year_created_at" name="year_created_at" required><br><br>
    <input type="submit" value="Ajouter Livre">
</form>
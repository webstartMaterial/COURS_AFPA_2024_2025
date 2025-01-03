<?php

    require_once("config/haut_page.php");

    if (!isset($_SESSION["user_id"]) || empty($_SESSION["user_id"])) {
        $_SESSION["message"] = "<div class='alert bg-success'>
            Veuillez vous connecter pour accéder à la page profil !
        </div>";
        header("connexion.php");
        exit();
    }

    if($_POST) {
        $sql = "INSERT INTO tweets (content, users_id) VALUES(:content, :user_id)";
        $stmt = $pdo->prepare($sql);
        $count = $stmt->execute(
            [
            ':content' => $_POST['content'],
            ':user_id' => $_POST['user_id']
            ]
        );
    
        if ($count > 0) {
            $msg = "<div class='alert bg-success'>
              Votre tweet a bien été inséré !
            </div>";
        }
    }

?>


<h1>Créer un nouveau tweet</h1>

<div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header text-center">
            Créer un nouveau tweet
          </div>

          <?= $msg; ?>
          <div class="card-body">
            <form method="POST">
            <input type="hidden" name="user_id" value="<?= $_SESSION["user_id"]; ?>">
              <!-- Champ Nom -->
              <div class="mb-3">
                <label for="content" class="form-label">Contenu</label>
                <input
                  type="text"
                  class="form-control"
                  id="content"
                  name="content"
                  placeholder="Entrez votre contenu"
                  required
                />
              </div>
              <!-- Bouton d'inscription -->
              <button type="submit" class="btn btn-success w-100">Créer tweet</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

<?php

    require_once('config/bas_page.php');

?>
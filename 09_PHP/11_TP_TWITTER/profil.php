<?php

require_once('config/haut_page.php');

if (!isset($_SESSION["user_id"]) || empty($_SESSION["user_id"])) {
  $_SESSION["message"] = "<div class='alert bg-success'>
      Veuillez vous connecter pour accéder à la page profil !
    </div>";
  header("connexion.php");
  exit();
}

// si je suis pas connecté (si j'ai pas de session user)
// vous redirigez vers connexion.php
// sinon vous afficher les ifnos de la session dans la page

?>

<h1>Profil</h1>

<div class="container mt-5">
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header text-center">
          Mon Profil
        </div>
        <div class="card-body">
          <!-- Informations de la session -->
          <div class="mb-3">
            <label class="form-label fw-bold">Nom :</label>
            <p id="user-name" class="form-control"><?= $_SESSION["name"]; ?></p>
          </div>
          <div class="mb-3">
            <label class="form-label fw-bold">Email :</label>
            <p id="user-email" class="form-control"><?= $_SESSION["email"]; ?></p>
          </div>
          <!-- Bouton Modifier le profil -->
          <div class="d-grid gap-2">
            <a href="#modifier-profil" class="btn btn-primary">Modifier le profil</a>
            <a href="#deconnexion" class="btn btn-danger">Se déconnecter</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<?php

require_once('config/bas_page.php');

?>
<?php

    require_once('config/haut_page.php');

    if(isset($_GET["query"])) {

      $query = $_GET["query"];

      try {

        $sql = "SELECT * FROM tweets WHERE content LIKE %:query%";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([':query' => $query]);
        $tweets = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
      } catch (PDOException $e) {
        $msg .= "<div class='alert bg-warning'>
          Erreur lors de la récupération des tweets : ". $e->getMessage() . ", code : " . $e->getCode() . "
        </div>";
      }

    } else {

      try {

        $sql = "SELECT * FROM tweets t
        INNER JOIN users u ON u.id = t.users_id
        ORDER BY t.created_at DESC LIMIT 10";
        $stmt = $pdo->prepare($sql);
        $stmt->execute();
        $tweets = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
      } catch (PDOException $e) {
        $msg .= "<div class='alert bg-warning'>
          Erreur lors de la récupération des tweets : ". $e->getMessage() . ", code : " . $e->getCode() . "
        </div>";
      }


    }



?>

<h1>Accueil</h1>

<div class="container mt-5">
    <h1 class="text-center mb-4">Tweets</h1>
    <a class="alert bg-info" href="insert_tweet.php">Ajouter un tweet</a>
    <div class="row justify-content-center">
      <div class="col-md-8">

        <?= $msg; ?>


        <?php

        foreach ($tweets as $tweet) { ?>

          <div class="card mb-3">
            <div class="card-body">
              <div class="d-flex align-items-start">
                <img src="https://via.placeholder.com/50" alt="Avatar" class="rounded-circle me-3" />
                <div>
                  <h6 class="fw-bold mb-0"><?= $tweet["name"]; ?> <span class="text-muted"><?= $tweet["pseudo"]; ?></span></h6>
                  <p class="text-muted small"><?= $tweet["created_at"]; ?></p>
                </div>
              </div>
              <p class="mt-2"><?= $tweet["content"]; ?></p>
              <!-- <div class="d-flex justify-content-between text-muted small">
                <span>❤️ 12</span>
                <span>🔁 4</span>
                <span>💬 3</span>
              </div> -->
            </div>
          </div>
        
        <?php } ?>

      </div>
    </div>
  </div>


<?php

    require_once('config/bas_page.php');

?>
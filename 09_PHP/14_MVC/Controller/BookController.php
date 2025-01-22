<?php


    namespace Controller;

    class BookController {


        private $service;

        // injection de dépendance
        public function __construct($service){
            $this->service = $service;
        }

        /**
         * Gérer les différents url et donc les différentes requêtes http pour mes livres
         * @return void
         */
        public function route() {

            if(!isset($_GET["action"])) {
                $this->listBooks();
            } else if(isset($_GET["action"]) == "add") {
                $this->addBook();
            }

        }

        /**
         * Méthode responsable d'afficher les livres
         * @return void
         */
        public function listBooks() {

            try {
                $books = $this->service->listBooks();
                $view = new View("Templates/list_books.php", ['books' => $books]);
                $view->render();
            } catch (\Exception $e) {
                $view = new View("./Templates/error.php", ["msg" => $e->getMessage()]);
                $view->render();
            }

        }

        /**
         * Méthode responsable d'ajouter un livre
         * @return void
         */
        public function addBook() {
            if($_POST) {

                foreach ($_POST as $key => $value) {
                    $_POST[$key] = addslashes($value);
                }

                extract($_POST);

                try {
                    $this->service->addBook();
                    $books = $this->service->listBooks();

                    $view = new View("Templates/list_books.php", ['books' => $books, 'msg' => "Votre livre a bien été inséré !"]);
                    $view->render();
                } catch (\Throwable $th) {
                    $view = new View("./Templates/error.php", ["msg" => $e->getMessage()]);
                    $view->render();
                }

            } else {
                $view = new View("Templates/add_book.php");
                $view->render();
            }
        }

    }


?>
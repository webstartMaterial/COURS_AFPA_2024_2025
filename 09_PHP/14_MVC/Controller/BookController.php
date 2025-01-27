<?php


    namespace Controller;


    class BookController extends GenericController {

        private static $entity = "book";


        // private $service;

        // injection de dépendance
        public function __construct($service){
            parent::__construct($service, self::$entity);
        }

        /**
         * Gérer les différents url et donc les différentes requêtes http pour mes livres
         * @return void
         */
        // public function route() {

        //     if(!isset($_GET["action"])) {
        //         $this->listBooks();
        //     } else if($_GET["action"] == "add") {
        //         $this->addBook();
        //     } else if($_GET["action"] == "delete") {
        //         $this->deleteBook();
        //     }  else if($_GET["action"] == "update") {
        //         $this->updateBook();
        //     }


        // }

        /**
         * Méthode responsable d'afficher les livres
         * @return void
         */
        // public function listBooks() {

        //     try {
        //         $books = $this->service->listBooks();
        //         $view = new View("Templates/list_books.php", ['books' => $books]);
        //         $view->render();
        //     } catch (\Exception $e) {
        //         $view = new View("./Templates/error.php", ["msg" => $e->getMessage()]);
        //         $view->render();
        //     }

        // }

        /**
         * Méthode responsable d'ajouter un livre
         * @return void
         */
        // public function addBook() {
        //     if($_POST) {

        //         foreach ($_POST as $key => $value) {
        //             $_POST[$key] = addslashes($value);
        //         }

        //         extract($_POST);

        //         try {
        //             $this->service->addBook();
        //             $books = $this->service->listBooks();

        //             $view = new View("Templates/list_books.php", ['books' => $books, 'msg' => "Votre livre a bien été inséré !"]);
        //             $view->render();
        //         } catch (\Exception $e) {
        //             $view = new View("./Templates/error.php", ["msg" => $e->getMessage()]);
        //             $view->render();
        //         }

        //     } else {
        //         $view = new View("Templates/add_book.php");
        //         $view->render();
        //     }
        // }

        // public function deleteBook(){

        //     try {
        //         $this->service->deleteBook($_GET["book_id"]);
        //         $books = $this->service->listBooks();

        //         $view = new View("Templates/list_books.php", ['books' => $books, 'msg' => "Votre livre a bien été supprimé !"]);
        //         $view->render();
        //     } catch (\Exception $e) {
        //         $view = new View("./Templates/error.php", ["msg" => $e->getMessage()]);
        //         $view->render();
        //     }
        // }

        // public function updateBook(){

        //     if($_POST) {
        //         try {
        //             $this->service->updateBook($_POST["id"]);
        //             $books = $this->service->listBooks();
    
        //             $view = new View("Templates/list_books.php", ['books' => $books, 'msg' => "Votre livre a bien été mis à jour !"]);
        //             $view->render();
        //         } catch (\Exception $e) {
        //             $view = new View("./Templates/error.php", ["msg" => $e->getMessage()]);
        //             $view->render();
        //         }
        //     } else {
        //         $book = $this->service->selectBookById($_GET["book_id"]);
        //         $view = new View("Templates/update_book.php", ["book" => $book[0]]);
        //         $view->render();
        //     }

        // }

    }


?>
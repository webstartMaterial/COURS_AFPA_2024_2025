<?php

    namespace Controller;
    class LoanController {

        private $service;

        // injection de dépendance
        public function __construct($service){
            $this->service = $service;
        }

        public function route() {

            if(!isset($_GET["action"])) {
                $this->listLoans();
            } else if(isset($_GET["action"]) == "add") {
                $this->addLoan();
            }

        }

        public function listLoans() {

            try {
                $loans = $this->service->listLoans();
                $view = new View("./Templates/list_loans.php", ["loans" => $loans]);
                $view->render();
            } catch (\Exception $e) {
                $view = new View("./Templates/error.php", ["msg" => $e->getMessage()]);
                $view->render();
            }

        }

        public function addLoan() {
            if($_POST) {

                foreach ($_POST as $key => $value) {
                    $_POST[$key] = addslashes($value);
                }

                extract($_POST);
                $_POST["date_loan"] = date("Y-m-d"); // date d'emprunt

                try {
                    $this->service->addBook();
                    $books = $this->service->listLoans();

                    $view = new View("Templates/list_loans.php", ['loans' => $loans, 'msg' => "Votre emprunt a bien été inséré !"]);
                    $view->render();
                } catch (\Exception $e) {
                    $view = new View("./Templates/error.php", ["msg" => $e->getMessage()]);
                    $view->render();
                }

            } else {
                $books = $this->service->listBooks();
                $view = new View("Templates/add_loan.php", ["booksAvailable" => $books]);
                $view->render();
            }
        }

    }

?>
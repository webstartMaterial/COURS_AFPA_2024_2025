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
            
        }

    }

?>
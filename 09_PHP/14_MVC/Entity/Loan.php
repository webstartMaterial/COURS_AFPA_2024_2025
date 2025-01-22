<?php

    namespace Entity;
    
    class Loan {

        private $id;
        private $book_id;
        private $date_loan;
        private $date_return;

        public function __construct($id = null, $book_id = null, $date_loan = null, $date_return = null) {
            $this->id = $id;
            $this->book_id = $book_id;
            $this->date_loan = $date_loan;
            $this->date_return = $date_return;
        }

        public function getId() {
            return $this->id;

        }

        public function getBook_id() {
            return $this->book_id;
            
        }

        public function getDate_loan() {
            return $this->date_loan;
            
        }

        public function getDate_return() {
            return $this->date_return;
        }

    }


?>
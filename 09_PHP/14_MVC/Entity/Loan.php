<?php

    namespace Entity;
    
    class Loan {

        private $id;
        private $book_id;
        private $user_id;
        private $date_loan;
        private $date_return;
        private $book_title;
        private $last_name;
        private $first_name;

        public function __construct($id = null, $book_id = null, $date_loan = null, $date_return = null, $book_title = null, $first_name = null, $last_name = null) {
            $this->id = $id;
            $this->book_id = $book_id;
            $this->date_loan = $date_loan;
            $this->date_return = $date_return;
            $this->book_title = $book_title;
            $this->first_name = $first_name;
            $this->last_name = $last_name;
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

        public function getUser_id() {
            return $this->user_id;
        }

        public function getBookTitle() {
            return $this->book_title;
        }
    
        public function getFirstName() {
            return $this->first_name;
        }
    
        public function getLastName() {
            return $this->last_name;
        }

    }


?>
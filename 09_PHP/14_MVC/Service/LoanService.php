<?php

    namespace Service;
    class LoanService {

        private $repository;

        public function __construct($repository) {
            $this->repository = $repository;
        }

        public function listLoans() {
            return $this->repository->selectAll();
        }

        public function addLoan($book_id) {

            $this->repository->add();
            $this->repository->updateBookAvailability($book_id);

        }
        
        public function listBooks() {
            return $this->repository->selectBooks();
        }

    }

?>
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

        public function addLoan() {
            return $this->repository->add();
        }
        
        public function listBooks() {
            return $this->repository->selectBooks();
        }

    }

?>
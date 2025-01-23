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


        public function updateLoan($id) {
            return $this->repository->update($id);
        }

        public function deleteLoan($id) {
            return $this->repository->delete($id);
        }

        public function selectLoanById($id) {
            return $this->repository->selectById($id);
        }

    }

?>
<?php

    namespace Service;
    class LoanService {

        private $repository;

        public function __construct($repository) {
            $this->repository = $repository;
        }

        public function list() {
            return $this->repository->selectAll();
        }

        public function add($book_id) {

            $this->repository->add();
            $this->repository->updateBookAvailability($book_id);

        }

        public function update($id) {
            return $this->repository->update($id);
        }

        public function delete($id) {
            return $this->repository->delete($id);
        }

        public function selectById($id) {
            return $this->repository->selectById($id);
        }
        
        public function listBooks() {
            return $this->repository->selectBooks();
        }



        public function listUsers() {
            return $this->repository->selectAllUsers();
        }

        public function listBookLoansAndUsers() {
            return $this->repository->listBookLoansAndUsers();
        }
    }

?>
<?php


    namespace Service;

    class BookService {


        private $repository;

        public function __construct($repository) {
            $this->repository = $repository;
        }

        public function listBooks() {
            return $this->repository->selectAll();
        }

        public function addBook() {
            $this->repository->add();
        }

        public function deleteBook($id) {

            $this->repository->delete($id);

        }

        public function updateBook($id) {

            $this->repository->update($id);

        }
        
        public function selectBookById($id) {
            return $this->repository->selectById($id);
        }

    }

?>
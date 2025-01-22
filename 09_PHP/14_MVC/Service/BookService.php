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


    }

?>
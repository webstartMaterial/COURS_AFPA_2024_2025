<?php


    namespace Service;

    class BookService {


        private $repository;

        public function __construct($repository) {
            $this->repository = $repository;
        }

        public function list() {
            return $this->repository->selectAll();
        }

        public function add() {
            $this->repository->add();
        }

        public function delete($id) {

            $this->repository->delete($id);

        }

        public function update($id) {

            $this->repository->update($id);

        }
        
        public function selectById($id) {
            return $this->repository->selectById($id);
        }

    }

?>
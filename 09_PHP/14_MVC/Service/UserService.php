<?php

    namespace Service;
    class UserService {

        private $repository;

        public function __construct($repository) {
            $this->repository = $repository;
        }

    }

?>
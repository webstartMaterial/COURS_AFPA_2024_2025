<?php

    namespace Entity;
    
    class User {

        private $id;
        private $first_name;
        private $last_name;

        public function __construct($id = null, $first_name = null, $last_name = null) {
            $this->id = $id;
            $this->first_name = $first_name;
            $this->last_name = $last_name;
        }

        public function getId() {
            return $this->id;

        }

        public function getfirst_name() {
            return $this->first_name;
            
        }

        public function getLast_name() {
            return $this->last_name;
            
        }

    }


?>
<?php


    abstract class Character {


        private $name;
        private $marbles;

        public function __construct($name, $marbles) {
            $this->name = $name;
            $this->marbles = $marbles;
        }

        public function getName() {
            return $this->name;
        }

        public function setName($name) {
           $this->name = $name;
        }

        public function getMarbles() {
            return $this->marbles;
        }

        public function setMarbles($marbles) {
           $this->marbles = $marbles;
        }


        
    }


?>
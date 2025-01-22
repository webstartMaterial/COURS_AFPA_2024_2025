<?php

    namespace Entity;

    class Book {

        private $id;
        private $title;
        private $author;
        private $year_created_at;
        private $available;

        public function __construct($id = null, $title = null, $author = null, $year_created_at = null, $available = null) {

            $this->id = $id;
            $this->title = $title;
            $this->author = $author;
            $this->year_created_at = $year_created_at;
            $this->available = $available;

        }

        public function getId() {
            return $this->id;
        }

        public function getTitle() {
            return $this->title;
        }

        public function getAuthor() {
            return $this->author;
        }

        public function getYear_created_at() {
            return $this->year_created_at;
        }

        public function getAvailable() {
            return $this->available;
        }

    }

?>
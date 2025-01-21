<?php

    namespace Repository;


    class BookRepository extends GenericRepository {

        private static $table = "book";

        public function __construct() {
            parent::__construct(self::$table);
        }


    }



?>
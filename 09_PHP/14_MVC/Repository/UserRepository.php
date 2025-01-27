<?php

    namespace UserRepository;
    class LoanRepository extends GenericRepository  {

        private static $table = "user";

        public function __construct() {
            parent::__construct(self::$table);
        }

    }

?>
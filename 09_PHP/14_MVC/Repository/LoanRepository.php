<?php

    namespace Repository;
    class LoanRepository extends GenericRepository  {

        private static $table = "loan";

        public function __construct() {
            parent::__construct(self::$table);
        }

    }

?>
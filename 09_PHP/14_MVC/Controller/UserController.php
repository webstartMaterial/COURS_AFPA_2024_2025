<?php

    namespace Controller;


    class LoanController extends GenericController {


        private static $entity = "user";


        // injection de dépendance
        public function __construct($service){
            parent::__construct($service, self::$entity);
        }

      
    }

?>
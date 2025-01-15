<?php

    require_once("./ICalculator.php");


    class Calculator2024 implements ICalculator{


        public $amount;
        public $tva = 0.25;

        public function __construct($amount){
            $this->amount = $amount;
        }

        public function calculateTVA() {
            return $this->amount * $this->tva;
        }


    }


?>
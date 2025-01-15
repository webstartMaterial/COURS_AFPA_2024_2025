<?php

    require_once("./ICalculator.php");

    class Calculator2025 implements ICalculator{


        public $amount;
        public $tva = 0.35;

        public function __construct($amount){
            $this->amount = $amount;
        }

        public function calculateTVA() {
            return $this->amount * $this->tva;
        }


    }


?>
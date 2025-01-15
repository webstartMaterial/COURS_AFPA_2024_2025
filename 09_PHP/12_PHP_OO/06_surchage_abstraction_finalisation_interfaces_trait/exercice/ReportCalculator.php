<?php

    class ReportCalculator {

        // couplage de classe
        public ICalculator $calculator;

        public function __construct(ICalculator $calculator){
            $this->calculator = $calculator;
        }

        public function makeReport() {
            echo "Vous devez : " . $this->calculator->calculateTVA() . "€ de TVA !<br><br>";
        }

    }

?>
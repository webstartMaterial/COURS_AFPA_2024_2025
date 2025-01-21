<?php

    namespace Controller;


    class View {


        private $viewFile;
        private $data = [];

        public function __construct($viewFile, $data = []) {
            $this->viewFile = $viewFile;
            $this->data = $data;
        }

        // me permettra d'afficher la vue et les données à l'intérieur
        public function render() {

            if(file_exists($this->viewFile)) {

                // préparer le chargement d'une vue
                // pour l'instant ne pas encore l'afficher
                // créer les variables de vues avec les données
                // à injecter à l'intérieur
                // et afficher la vue avec ses données

                ob_start();
                extract($this->data);

                require_once($this->viewFile);

                echo ob_get_clean();


            } else {
                throw new \Exception("Vue non définie pour : " . $this->viewFile);
            }

        }


    }


?>
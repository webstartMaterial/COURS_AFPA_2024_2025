<?php

namespace Controller;

    class GenericController {

        private $service;
        private $entity;

        public function __construct($service, $entity) {
            $this->service = $service;
            $this->entity = $entity;
        }


        public function route() {

            if(!isset($_GET["action"])) {
                $this->list();
            } else if($_GET["action"] == "add") {
                $this->add();
            } else if($_GET["action"] == "delete") {
                $this->delete();
            }  else if($_GET["action"] == "update") {
                $this->update();
            }

        }

        public function list() {

            try {
                $data = $this->service->list();
                $view = new View("Templates/list_" . $this->entity . ".php", ["data" => $data]);
                $view->render();
            } catch (\Exception $e) {
                $view = new View("./Templates/error.php", ["msg" => $e->getMessage()]);
                $view->render();
            }
            
        }


        public function add() {

            if($_POST) {

                foreach ($_POST as $key => $value) {
                    $_POST[$key] = addslashes($value);
                }

                extract($_POST);

                try {
                    $this->service->add();
                    $data = $this->service->list();

                    $view = new View("Templates/list_" . $this->entity . ".php", ['data' => $data, 'msg' => "Votre " . $this->entity . " a bien été ajouté"]);
                    $view->render();
                } catch (\Exception $e) {
                    $view = new View("./Templates/error.php", ["msg" => $e->getMessage()]);
                    $view->render();
                }

            } else {
                $view = new View("Templates/add_" . $this->entity . ".php");
                $view->render();
            }

        }


        public function update() {
            if($_POST) {
                try {
                    $this->service->update($_POST["id"]);
                    $data = $this->service->list();
    
                    $view = new View("Templates/list_" . $this->entity . ".php", ['data' => $data, 'msg' => "Votre " . $this->entity . " a bien été mis à jour"]);
                    $view->render();
                } catch (\Exception $e) {
                    $view = new View("./Templates/error.php", ["msg" => $e->getMessage()]);
                    $view->render();
                }
            } else {
                $data = $this->service->selectById($_GET["id"]);
                $view = new View("Templates/update_" . $this->entity . ".php", ["data" => $data[0]]);
                $view->render();
            }
        }

        public function delete() {
            try {
                $this->service->delete($_GET["id"]);
                $data = $this->service->list();

                $view = new View("Templates/list_" . $this->entity . ".php", ['data' => $data, 'msg' => "Votre " . $this->entity . " a bien été supprimé"]);
                $view->render();
            } catch (\Exception $e) {
                $view = new View("./Templates/error.php", ["msg" => $e->getMessage()]);
                $view->render();
            }
        }

        public function getService() {
            return $this->service;
        }

        public function getEntity() {
            return $this->entity;
        }
    }

?>
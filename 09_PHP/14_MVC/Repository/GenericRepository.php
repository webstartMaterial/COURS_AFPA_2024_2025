<?php

namespace Repository;


    class GenericRepository {


        private $db;
        private $table;

        public function __construct($table) {
            $this->table = $table;
        }

        public function getDb() {

            if(!$this->db) {
                try {
                    $xml = simplexml_load_file("./Config/db.xml");
                    try {
                        $options = [
                            \PDO::ATTR_ERRMODE            => \PDO::ERRMODE_EXCEPTION,
                            \PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC,
                            \PDO::ATTR_EMULATE_PREPARES   => false,
                        ];
                        $dsn = "mysql:host=". $xml->host .";dbname=". $xml->db .";charset=". $xml->charset;
                        $this->db = new \PDO($dsn, $xml->user, $xml->password, $options);
    
                    } catch (\PDOException $e) {
                        throw new \Exception($e->getMessage());
                    }
                } catch (\Exception $e) {
                    throw new \Exception($e->getMessage());
                }
            }
            return $this->db;


        }

        public function selectAll() {
            $sql = "SELECT * FROM " . $this->table . ";";
            $stmt = $this->getDb()->query($sql);
            return $stmt->fetchAll(\PDO::FETCH_CLASS|\PDO::FETCH_PROPS_LATE, "\Entity\\" . $this->table);
        }

        public function selectById($id) {
            $sql = "SELECT * FROM " . $this->table . " WHERE id = '$id';";
            $stmt = $this->getDb()->query($sql);
            return $stmt->fetchAll(\PDO::FETCH_CLASS|\PDO::FETCH_PROPS_LATE, "\Entity\\" . $this->table);

        }

        public function add() {
            // construire la chaine SQL pour l'insert
            $columns = implode(", ", array_keys($_POST)); // "title, author, year_created_at, available"
            $parameters = ":" . implode(", :", array_keys($_POST));// ":title, :author, :year_created_at, :available"

            // INSERT INTO table(title, author, year_created_at, available) VALUES (:title, :author, :year_created_at, :available);
            $sql = "INSERT INTO " . $this->table . " ({$columns}) VALUES ({$parameters});";
            $stmt = $this->getDb()->prepare($sql);

            // lier chaque valeur à un paramètre de ma requête
            foreach ($_POST as $index => &$value) {
                $stmt->bindParam(":{$index}", $value);
            }

            // $stmt->bindParam(":title", $_POST["title"]);
            // $stmt->bindParam(":author", $_POST["author"]);
            // $stmt->bindParam(":year_created_at", $_POST["year_created_at"]);
            // $stmt->bindParam(":available", $_POST["available"]);
            $stmt->execute();
            return $this->getDb()->lastInsertId();
        }

        public function delete($id) {
            $sql = "DELETE FROM " . $this->table . " WHERE id = '$id';";
            $this->getDb()->exec($sql);
        }

        public function update($id) {

            $setPart = [];

            foreach ($_POST as $column => $value) {
                $setPart[] = "$column = :$column"; // ça ça ajoute une valeur à notre array et ca fait +1 sur l'index
            }

            $stringParameters = implode(", ", $setPart); // title = :title, author = :author...
            // UPDATE book SET title = :title, author = :author...
            $sql = "UPDATE " . $this->table . " SET " . $stringParameters . " WHERE id = '$id';";

            $stmt = $this->getDb()->prepare($sql);
            
            foreach ($_POST as $column => &$value) {
                $stmt->bindParam(":$column", $value);
            }

            $stmt->execute();
            
        }

    }


?>
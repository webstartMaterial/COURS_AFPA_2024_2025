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
            return $stmt->fetchAll(\PDO::FETCH_CLASS, "\Entity\\" . $this->table);
        }

        public function selectById($id) {
            
        }

        public function add() {
            
        }

        public function delete($id) {
            
        }

        public function update($id) {
            
        }

    }


?>
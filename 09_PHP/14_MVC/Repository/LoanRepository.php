<?php

    namespace Repository;
    class LoanRepository extends GenericRepository  {

        private static $table = "loan";

        public function __construct() {
            parent::__construct(self::$table);
        }

        public function selectBooks() {
            $sql = "SELECT * FROM book WHERE available = '1';";
            $stmt = $this->getDb()->query($sql);
            return $stmt->fetchAll(\PDO::FETCH_CLASS|\PDO::FETCH_PROPS_LATE, "\Entity\Book");
        }

        public function updateBookAvailability($book_id) {
            
            $sql = "UPDATE book SET available = 0 WHERE id = '$book_id';";
            $this->getDb()->exec($sql);
        }

        public function selectAllUsers() {
            $sql = "SELECT * FROM user";
            $stmt = $this->getDb()->query($sql);
            return $stmt->fetchAll(\PDO::FETCH_CLASS|\PDO::FETCH_PROPS_LATE, "\Entity\User");
        }

        public function listBookLoansAndUsers() {
            $sql = "
            SELECT b.title as book_title, l.date_return, l.date_loan, u.first_name, u.last_name
            FROM loan l
            INNER JOIN book b ON b.id = l.book_id
            INNER JOIN user u ON u.id = l.user_id;
            ";
            $stmt = $this->getDb()->query($sql);
            return $stmt->fetchAll(\PDO::FETCH_CLASS|\PDO::FETCH_PROPS_LATE, "\Entity\Loan");
        }

    }

?>
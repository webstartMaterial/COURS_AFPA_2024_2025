<?php


    $pdo = new PDO(
        'mysql:host=localhost;dbname=twitter',
        'root',
        'root',
        array(
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, // Use ERRMODE_EXCEPTION for better debugging
            PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'
        )
    );

    session_start();
    $msg = "";

?>
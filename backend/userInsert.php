<?php
    require_once './connection.php';

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $query = 'INSERT INTO users (username, password, email) VALUES (:u, :p, :e);';
        $query_params = [
            'u' => $_POST['username'],
            'p' => $_POST['password'],
            'e' => $_POST['email']
        ];
        $result = execute_dml($query, $query_params);
        echo json_encode($result);
    }
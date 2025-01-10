<?php
    require_once './connection.php';

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $query = 'INSERT INTO games(user_id, score, difficulty, timestamp) VALUES (:u, :s, :d, :t);';
        $query_params = [
            'u' => $_POST['user_id'],
            's' => $_POST['score'],
            'd' => $_POST['difficulty'],
            't' => $_POST['timestamp']
        ];
        $result = execute_dml($query, $query_params);
        echo json_encode($result);
    }
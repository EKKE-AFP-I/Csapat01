<?php
    require_once 'connection.php';
    $querry = 'SELECT * FROM users;';
    $users = execute_ql_list($querry);
    echo json_encode($users);
?>
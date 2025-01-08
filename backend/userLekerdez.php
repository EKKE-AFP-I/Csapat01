<?php
    require_once 'connection.php';

    function get_all_users() { 
        $query = 'SELECT * FROM users;'; 
        $users = execute_ql_list($query); 
        return json_encode($users); 
    }

    $all_users = get_all_users(); 
    echo $all_users;
?>
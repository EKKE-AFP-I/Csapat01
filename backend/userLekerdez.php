<?php
    require_once 'connection.php';

    function get_all_users() { 
        $query = 'SELECT * FROM users;'; 
        $users = execute_ql_list($query); 
        return json_encode($users); 
    }
    function get_user_by_id($id) { 
        $query = 'SELECT * FROM users WHERE id = :id;'; 
        $query_params = ['id' => $id]; 
        $user = execute_ql_list($query, $query_params); 
        return json_encode($user); 
    }

    $all_users = get_all_users(); 
    echo $all_users;

    $user = get_user_by_id(1); 
    echo $user;
?>
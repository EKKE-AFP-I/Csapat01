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
    function get_users_by_score($user_cnt) { 
 
    }

    $all_users = get_all_users(); 
    echo "All users: <br>";
    echo $all_users;

    $user = get_user_by_id(1); 
    echo "User with id 1: <br>";
    echo $user;
?>
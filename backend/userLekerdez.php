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
        $query = 'SELECT * FROM users ORDER BY score DESC LIMIT :user_cnt;'; 
        $query_params = ['user_cnt' => $user_cnt]; 
        $users = execute_ql_list($query, $query_params); 
        return json_encode($users);
    }
    function get_user_role_by_id($id) { 
 
    }

    $all_users = get_all_users(); 
    echo "All users: <br>";
    echo $all_users;

    $user = get_user_by_id(1); 
    echo "User with id 1: <br>";
    echo $user;

    $best_users = get_users_by_score(3);
    echo "Best 3 users: <br>";
    echo $best_users;
?>
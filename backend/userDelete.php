<?php
    require_once 'connection.php';

    function delete_all_users() { 
        $query = 'DELETE FROM users;'; 
        execute_dml($query); 
    }

    function delete_user_by_id($id) { 
        $query = 'DELETE FROM users WHERE id = :id;'; 
        $query_params = ['id' => $id]; 
        execute_dml($query, $query_params); 
    }
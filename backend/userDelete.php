<?php
    require_once 'connection.php';

    function delete_all_users() { 
        $query = 'DELETE FROM users;'; 
        execute_dml($query); 
    }
<?php
    require_once 'connection.php';

    function delete_all_games() { 
        $query = 'DELETE FROM games;'; 
        execute_dml($query); 
    }

    function delete_game_by_id($id) { 
        $query = 'DELETE FROM games WHERE id = :id;'; 
        $query_params = ['id' => $id]; 
        execute_dml($query, $query_params); 
    }

    function delete_game_by_user_id($user_id) { 
        $query = 'DELETE FROM games WHERE user_id = :user_id;'; 
        $query_params = ['user_id' => $user_id]; 
        execute_dml($query, $query_params); 
    }
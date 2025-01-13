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
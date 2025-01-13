<?php
    require_once 'connection.php';

    function delete_all_games() { 
        $query = 'DELETE FROM games;'; 
        execute_dml($query); 
    }
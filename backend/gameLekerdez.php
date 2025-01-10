<?php
    require_once 'connection.php';

    function get_all_games() { 
        $query = 'SELECT * FROM games;'; 
        $games = execute_ql_list($query); 
        return json_encode($games); 
    }
    function get_game_by_id($id) { 
        
    }

    $all_games = get_all_games();
    echo "All games: <br>";
    echo $all_games;
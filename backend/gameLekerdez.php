<?php
    require_once 'connection.php';

    function get_all_games() { 
        $query = 'SELECT * FROM games;'; 
        $games = execute_ql_list($query); 
        return json_encode($games); 
    }
    function get_game_by_id($id) { 
        $query = 'SELECT * FROM games WHERE id = :id;'; 
        $query_params = ['id' => $id]; 
        $game = execute_ql_list($query, $query_params); 
        return json_encode($game); 
    }
    function get_games_by_score($game_cnt) { 
        $query = 'SELECT * FROM games ORDER BY score DESC LIMIT :game_cnt;'; 
        $query_params = ['game_cnt' => $game_cnt]; 
        $games = execute_ql_list($query, $query_params); 
        return json_encode($games);
    }

    $all_games = get_all_games();
    echo "All games: <br>";
    echo $all_games;

    $game = get_game_by_id(1);
    echo "Game with id 1: <br>";
    echo $game;

    $best_games = get_games_by_score(3);
    echo "Best 3 games: <br>";
    echo $best_games;
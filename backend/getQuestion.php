<?php
    require_once 'connection.php';

    function get_all_questions() { 
        $query = 'SELECT * FROM quiz;'; 
        $questions = execute_ql_list($query); 
        return json_encode($questions); 
    }

    $all_quiestons = get_all_questions(); 
    echo "All questions: <br>";
    echo $all_quiestons;

    function get_game_by_id($id) { 
    }
?>
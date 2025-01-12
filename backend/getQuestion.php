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

    function get_question_by_id($id) {
        $query = 'SELECT * FROM quiz WHERE id = ' . $id . ';'; 
        $question = execute_ql_list($query); 
        return json_encode($question); 
    }

    $question = get_game_by_id(1);
    echo "Question with id 1: <br>";
    echo $question;

?>
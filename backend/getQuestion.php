<?php
    require_once 'connection.php';

    function get_all_questions() { 
        $query = 'SELECT * FROM quiz;'; 
        $questions = execute_ql_list($query); 
        return json_encode($questions); 
    }
?>
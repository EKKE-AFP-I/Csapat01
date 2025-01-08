<?php 

define('DB_HOST', 'localhost');
define('DB_PORT', 4444);
define('DB_NAME', 'csapat01');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_DRIVER', 'mysql');

function get_connection() : PDO {
    $dsn = DB_DRIVER.':host='.DB_HOST.':'.DB_PORT.';dbname='.DB_NAME;
    $connection = new PDO($dsn, DB_USER, DB_PASS);

    return $connection;
}
function close_connection(PDO $connection){
    $connection = null;
}
function execute_dml(string $query, array $query_params = []) : bool {
    $connection = get_connection();
    $statement = $connection->prepare($query);
    $result = $statement->execute($query_params);
    $statement->closeCursor();
    close_connection($connection);
    return $result;
}
function execute_ql_list(string $query, array $query_params = []) : array{
    $result = [];
    $connection = get_connection();
    $statement = $connection->prepare($query);
    $execution_result = $statement->execute($query_params);
    if($execution_result) $result = $statement->fetchAll();
    $statement->closeCursor();
    close_connection($connection);
    return $result;
}
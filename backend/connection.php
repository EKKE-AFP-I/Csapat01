<?php 

define('DB_HOST', 'localhost');
define('DB_PORT', 4444);
define('DB_NAME', 'afp_project');
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

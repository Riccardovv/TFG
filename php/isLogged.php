<?php
// Initialize the session
session_start();
 
if (isset($_SESSION)) {
    echo 'true';
}else{
    echo 'false';
}

?>
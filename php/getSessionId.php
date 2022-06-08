<?php
require_once 'LibreriaPDO.php';
session_start();

$base= new DB('demo');



if (isset($_SESSION['id'])) {
    
   $user= $base->ConsultaUsers('select * from users where id= ?',[$_SESSION['id']]);

    echo json_encode($base->users);

}else {
    echo json_encode('unset');
}
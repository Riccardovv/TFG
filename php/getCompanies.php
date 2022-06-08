<?php
require_once 'LibreriaPDO.php';
session_start();

$base= new DB('demo');



if (isset($_SESSION['id'])) {
    
    $base->ConsultaCompanies('select * from companies ',[]);


    echo json_encode($base-> companies);

}else {
    echo json_encode('unset');
}
<?php
require_once 'LibreriaPDO.php';
session_start();

$base= new DB('demo');



if (isset($_SESSION['id'])) {
    
    $base->ConsultaCategories('select * from categories ',[]);


    echo json_encode($base-> categories);

}else {
    echo json_encode('unset');
}
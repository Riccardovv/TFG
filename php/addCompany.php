<?php
require_once 'LibreriaPDO.php';
$base= new DB('demo');

header('Content-Type: application / x-www-form-urlencoded');

$base->ConsultaSimple('insert into companies values (?, ?)', ['0', $_POST['nNombre']]);
header("location: ../index.html");
?>


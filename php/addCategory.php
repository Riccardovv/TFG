<?php
require_once 'LibreriaPDO.php';
$base= new DB('demo');

header('Content-Type: application / x-www-form-urlencoded');

$base->ConsultaSimple('insert into categories values (?, ?, ?)', ['0', $_POST['nName'], $_POST['nDesc']]);
header("location: ../index.html");
?>


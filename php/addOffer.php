<?php
require_once 'LibreriaPDO.php';
$base= new DB('demo');

header('Content-Type: application / x-www-form-urlencoded');

$base->ConsultaSimple('insert into offers values (?, ?, ?, ?, ?)', ['0', $_POST['nCompany'], $_POST['nCategory'], $_POST['nName'], $_POST['nDescription']]);
header("location: ../index.html");
?>


<?php
require_once '../LibreriaPDO.php';
$base= new DB('demo');

header('Content-Type: application / x-www-form-urlencoded');

$base->ConsultaSimple('delete from categories where id =? ', [$_POST['id']]);
$base->ConsultaSimple('delete from offers where if_category =? ', [$_POST['id']]);
header("location: ../../index.html");
?>


<?php
require_once '../LibreriaPDO.php';
$base= new DB('demo');

header('Content-Type: application / x-www-form-urlencoded');

$base->ConsultaSimple('delete from users where id =? ', [$_POST['id']]);
header("location: ../../index.html");
?>


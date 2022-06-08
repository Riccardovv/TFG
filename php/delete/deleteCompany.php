<?php
require_once '../LibreriaPDO.php';
$base= new DB('demo');

header('Content-Type: application / x-www-form-urlencoded');

$base->ConsultaSimple('delete from companies where id =? ', [$_POST['id']]);
$base->ConsultaSimple('delete from offers where id_company =? ', [$_POST['id']]);
header("location: ../../index.html");
?>


<?php
require 'includes/PHPMailer.php';
require 'includes/SMTP.php';
require 'includes/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$mail=new PHPMailer();

$mail->isSMTP();

$mail->Host= 'smtp.gmail.com';

$mail->SMTPAuth= 'true';

$mail->SMTPSecure= 'tls';

$mail->Port= '587';

$mail->Username= 'comjobsite@gmail.com';

$mail->Password= 'K$5KiYJG46fb6gDm';

$mail->Subject= "email from Jobsite";

$mail->setFrom('comjobsite@gmail.com');

$mail->Body= 'testing mail';

$mail->addAddress('racenaruedas@gmail.com');

if ($mail->send()) {
    echo 'sent';
}else{
    echo 'error';
}




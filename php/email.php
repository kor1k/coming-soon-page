<?php
if($_POST){
    $name = $_POST['form_phone'];
    $email = $_POST['form_email'];
//send email
    mail("yamnyk.vlog@gmail.com", "Feedback form" , $name);
}
?>

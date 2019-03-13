<?php
if($_POST){
    $message = $_POST['message'];
//send email
    mail("koortttt@gmail.com", "Feedback form" , $message);
}
?>

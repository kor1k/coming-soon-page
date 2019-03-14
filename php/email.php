<?php
if($_POST){
    $message = $_POST['message'];
    mail("koortttt@gmail.com", "Feedback form" , $message);
}
?>

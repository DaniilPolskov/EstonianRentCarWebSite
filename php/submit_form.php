<?php
require 'config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $message = $_POST['message'];

    $sql = "INSERT INTO feedback (email, message) VALUES ('$email', '$message')";

    if ($conn->query($sql) === TRUE) {
        echo "Сообщение отправлено";
    } else {
        echo "Ошибка: " . $conn->error;
    }
}
?>
<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $conn = new mysqli('localhost', 'root', '', 'estonianrentcar');

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT id, username, password FROM users WHERE username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($id, $username, $hashed_password);
        $stmt->fetch();

        if (password_verify($password, $hashed_password)) {
            $_SESSION['username'] = $username;
            $_SESSION['authenticated'] = true; // Set authenticated flag
            $_SESSION['success'] = "Вы успешно авторизованы";
            header('Location: ../index.html');
            exit();
        } else {
            $_SESSION['error'] = "Неправильный пароль";
        }
    } else {
        $_SESSION['error'] = "Пользователь не найден";
    }

    $stmt->close();
    $conn->close();
    header('Location: ../index.html');
}
?>

<?php
session_start();
session_unset(); // очищаем все переменные сессии
session_destroy(); // разрушаем сессию

// перенаправляем пользователя на нужную страницу после выхода
header("Location: ../index.html");
exit();
?>

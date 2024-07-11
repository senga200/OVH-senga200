<?php
$correct_password = 'cappello';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $password = $_POST['password'];

    if ($password === $correct_password) {
        header('Location: enter.php');
        exit();
    } else {
        echo 'Mot de passe incorrect. <a href="protected.html">Réessayer</a> Revenir à la page d\'accueil <a href="index.html">ici</a>.';
    }
} else {
    header('Location: protected.html');
    exit();
}

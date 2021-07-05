<?php
include_once 'config/dbh.php';
include_once 'config/cors.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"));

    $name = $data->nome;
    $uname = $data->username;
    $anv = $data->aniversario;
    $fne = $data->fone;
    $email = $data->email;
    $nivel = $data->nivel;
    $pass = $data->password;

    // Hash Password
    $hashed = password_hash($pass, PASSWORD_DEFAULT);

    // U can do validation like unique username etc....

    $sql = $conn->query("INSERT INTO users (nome, username, aniversario, fone, email, nivel, password) VALUES ('$name', '$uname', '$anv', '$fne', '$email', '$nivel', '$hashed')");
    if ($sql) {
        http_response_code(201);
        echo json_encode(array('message' => 'User created'));
    } else {
        http_response_code(500);
        echo json_encode(array('message' => 'Internal Server error'));
    }
} else {
    http_response_code(404);
}
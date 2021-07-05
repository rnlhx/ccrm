<?php
include_once 'config/dbh.php';
include_once '../vendor/autoload.php';

use \Firebase\JWT\JWT;

include_once 'config/cors.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"));

    $uname = $data->username;
    $pass = $data->password;

    $sql = $conn->query("SELECT * FROM users WHERE username = '$uname'"); 
    if ($sql->num_rows > 0) {
        $user = $sql->fetch_assoc();
        if (password_verify($pass, $user['password'])) {
            $key = "YOUR_SECRET_KEY";  // JWT KEY
            $payload = array(
                'user_id' => $user['id'],
                'nome' => $user['nome'],
                'username' => $user['username'],
                'email' => $user['email'],
                'nivel' => $user['nivel'],

            );

            $token = JWT::encode($payload, $key);
            http_response_code(200);
            echo json_encode(array('token' => $token));
        } else {
            http_response_code(400);
            echo json_encode(array('message' => 'Login Failed!'));
        }
    } else {
        http_response_code(400);
        echo json_encode(array('message' => 'Login Failed!'));
    }
}


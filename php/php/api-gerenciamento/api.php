<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

    $con = new mysqli('localhost','root', '','crmc');

    if($_SERVER['REQUEST_METHOD'] === 'GET'){
        // Pegando as informações do banco de dados
        if(isset($_GET['id'])){
            // Este If é usado, caso de passagem de ID
            $id = $_GET['id'];
            $sql = $con->query("select * from users where id='$id'");
            $data = $sql->fetch_assoc();
        }else{
            // Entra nesse, caso não tenha passagem de ID via "get"
            $data = array();
            $sql = $con->query("select * from users ORDER BY nome");
            while($d = $sql->fetch_assoc()){
                $data[] = $d;
            }
        }
        exit(json_encode($data));
    }   
    if($_SERVER['REQUEST_METHOD'] === 'PUT'){
        // alterar informações
        if(isset($_GET['id'])){
            $id = $_GET['id'];
            $data = json_decode(file_get_contents("php://input"));
            $sql = $con->query("update users set 
                nome = '".$data->nome."',
                username = '".$data->username."',
                aniversario = '".$data->aniversario."',
                fone = '".$data->fone."',
                email = '".$data->email."',  
                nivel = '".$data->nivel."'
                where id = '$id'");
            if($sql){
                exit(json_encode(array('status' => 'Sucesso')));
            }else{
                exit(json_encode(array('status' => 'Não Funcionou')));
            }
        }

    } 
    if($_SERVER['REQUEST_METHOD'] === 'POST'){

        $pass = $data->password;

        // Hash Password
        $hashed = password_hash($pass, PASSWORD_DEFAULT);

        // gravar informações
        $data = json_decode(file_get_contents("php://input"));
        $sql = $con->query("insert into users(nome, username, aniversario, fone, email, nivel, password) values ('".$data->nome."','".$data->username."','".$data->aniversario."','".$data->fone."','".$data->email."','".$data->nivel."','".$hashed->password."')");
        if($sql){
            $data->id = $con->insert_id;
            exit(json_encode($data));
        }else{
            exit(json_decode(array('status' => 'Não Funcionou')));
        }
    }
    
    if($_SERVER['REQUEST_METHOD'] === 'DELETE'){
        // apagar informações do banco
        if(isset($_GET['id'])){
            $id = $_GET['id'];
            $sql = $con->query("delete from users where id='$id'");
            if($sql){
                exit(json_encode(array('status' => 'Sucesso')));
            }else{
                exit(json_encode(array('status' => 'Não funcinou')));
            }
        }
    }
   
   
    
?>
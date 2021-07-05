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
            $sql = $con->query("select * from prayer_request where id='$id'");
            $data = $sql->fetch_assoc();
        }else{
            // Entra nesse, caso não tenha passagem de ID via "get"
            $data = array();
            $sql = $con->query("select * from prayer_request ORDER BY create_date");
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
            $sql = $con->query("update prayer_request set  
                nome_pessoa = '".$data->nome_pessoa."', 
                descricao = '".$data->descricao."' 
                where id = '$id'");
            if($sql){
                exit(json_encode(array('status' => 'Sucesso')));
            }else{
                exit(json_encode(array('status' => 'Não Funcionou')));
            }
        }

    } 
    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        // gravar informações
        $data = json_decode(file_get_contents("php://input"));
        $sql = $con->query("insert into prayer_request(nome_pessoa, descricao) values ('".$data->nome_pessoa."','".$data->descricao."')");
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
            $sql = $con->query("delete from prayer_request where id='$id'");
            if($sql){
                exit(json_encode(array('status' => 'Sucesso')));
            }else{
                exit(json_encode(array('status' => 'Não funcinou')));
            }
        }
    }
    
?>
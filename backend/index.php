<?php
    header("Access-Control-Allow-Origin: *");
    
    $link = mysqli_connect("127.0.0.1", "db_login", "db_password", "db_name");

    if(isset($_REQUEST['action']) && $_REQUEST['action'] == 'create_link' && isset($_REQUEST['link'])){
        $cut_link = "kittycut.tk/" . create_cut_link();
        mysqli_query($link, "INSERT INTO `links` (link, cut_link) VALUES ('" . $_REQUEST['link'] . "', '" . $cut_link . "')");
        echo json_encode([
            'status' => 'ok',
            'link' => $cut_link,
        ]);
        exit;    
    }

    if(isset($_REQUEST['action']) && $_REQUEST['action'] == 'get_link' && isset($_REQUEST['link'])){
        $result = mysqli_query($link, "SELECT link FROM `links` WHERE cut_link='" . $_REQUEST['link'] . "'");
        if (mysqli_num_rows($result) > 0) {
            if($row = mysqli_fetch_assoc($result)){
                echo json_encode([
                    'status' => 'ok',
                    'link' => $row['link'],
                ]);
                exit; 
            } 
        }
        echo json_encode([
            'status' => 'error',
            'link' => $row['link'],
        ]);
        exit;
    }

    function create_cut_link()
    {   
        $characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    
        return substr(str_shuffle($characters), 0, 9);
    }

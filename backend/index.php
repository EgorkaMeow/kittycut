<?php
    $link = mysqli_connect("127.0.0.1", "cd97952_kittycut", "1q2w3e4r", "cd97952_kittycut");

    if(isset($_POST['action']) && $_POST['action'] == 'create_link' && isset($_POST['link'])){
        $cut_link = "kittycut.tk/" . create_cut_link();
        mysqli_query($link, "INSERT INTO `links` (link, cut_link) VALUES ('" . $_POST['link'] . "', '" . $cut_link . "')");
        echo $cut_link;
        exit;    
    }

    if(isset($_POST['action']) && $_POST['action'] == 'get_link' && isset($_POST['link'])){
        $result = mysqli_query($link, "SELECT link FROM `links` WHERE cut_link='" . $_POST['link'] . "'");
        if (mysqli_num_rows($result) > 0) {
            if($row = mysqli_fetch_assoc($result)){
                echo $row['link'];
                exit; 
            }   
        }
        echo "no";
        exit;
    }

    function create_cut_link()
    {   
        $characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    
        return substr(str_shuffle($characters), 0, 9);
    }
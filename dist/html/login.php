<?php
    header("content-type:text/html;charset=utf-8");
    header('Access-Control-Allow-Origin:*'); 
    $name = $_POST['username'];
    $pass = $_POST['userpass'];

    $link = mysqli_connect('localhost','root','root','h5-2002');
    if(!$link){
        die('连接失败:'.mysqli_connect_error());
    }
    
    // 设置编码
    mysqli_set_charset($link,'utf8');
    $sql = "select * from aaa where name='{$name}' and pass='{$pass}'";
    $res  = mysqli_query($link,$sql);
    mysqli_close($link);
    $arr = mysqli_fetch_all($res,MYSQL_ASSOC);
    if(count($arr)==1){
        echo "1"; 
    }else{
        echo "0"; 
    }

?> 
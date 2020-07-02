<?php
    header("content-type:text/html;charset=utf-8");

    $name = $_POST["username"];
    $phone = $_POST["userphone"];
    $pass = $_POST["userpass"];
    
    // 连接数据库
    $link = mysqli_connect('localhost','root','root','h5-2002');
    if(!$link){
        die('连接失败:'.mysqli_connect_error());
    }
    
    // 设置编码
    mysqli_set_charset($link,'utf8');

    $sql = "insert into aaa(name,phone,pass) values ('$name','$phone','$pass')";
    $res = mysqli_query($link,$sql);
    if(!$res){
        echo "不好意思，注册失败，请重新<a href='reg.html'>注册</a>";
    }else{
        echo "恭喜您，注册成功！请<a href='login.html'>登录</a>";
    }
    mysqli_close($link);
?>
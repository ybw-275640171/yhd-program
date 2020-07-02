// 更多网站登录显示
$(".icon-jiantoushang").click(function(){
    $(".icon-jiantoushang").css("display","none");
    $(".aaa").css("display","inline-block")
    $(".list2").css("display","block");
    $("conlogin").css("height","240px")
})
$(".aaa").click(function(){
    $(".icon-jiantoushang").css("display","inline-block");
    $(".aaa").css("display","none")
    $(".list2").css("display","none");
    $("conlogin").css("height","216px")
})


//登录效果
let un = document.getElementById('un')
let pass = document.getElementById('pass')
let formitem = document.getElementsByClassName('formitem')


$('.btn').eq(0).click(function(){
    let xhr = new XMLHttpRequest();

    xhr.open("post","login.php",true);
    xhr.onreadystatechange = function(){
        let result = xhr.responseText;
        console.log(result);
        if(result==1){
            for(var i=0,len=formitem.length;i<len;i++){
                formitem[i].style.border = "1px solid green"
            }
            alert("登录成功")
        }else if(result == 0){
            for(var i=0,len=formitem.length;i<len;i++){
                formitem[i].style.border = "1px solid red"
            }
        }
    }
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    let sendStr = `username=${un.value}&userpass=${pass.value}`;
    xhr.send(sendStr);
})
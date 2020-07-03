"use strict";

// 更多网站登录显示
$(".icon-jiantoushang").click(function () {
  $(".icon-jiantoushang").css("display", "none");
  $(".aaa").css("display", "inline-block");
  $(".list2").css("display", "block");
  $("conlogin").css("height", "240px");
});
$(".aaa").click(function () {
  $(".icon-jiantoushang").css("display", "inline-block");
  $(".aaa").css("display", "none");
  $(".list2").css("display", "none");
  $("conlogin").css("height", "216px");
}); //登录效果

var un = document.getElementById('un');
var pass = document.getElementById('pass');
var formitem = document.getElementsByClassName('formitem');
$('.btn').eq(0).click(function () {
  var xhr = new XMLHttpRequest();
  xhr.open("post", "http://localhost/test/2002-cli/dist/html/login.php", true);

  xhr.onreadystatechange = function () {
    var result = xhr.responseText;
    console.log(result);

    if (result == 1) {
      for (var i = 0, len = formitem.length; i < len; i++) {
        formitem[i].style.border = "1px solid green";
      }

      alert("登录成功");
    } else if (result == 0) {
      for (var i = 0, len = formitem.length; i < len; i++) {
        formitem[i].style.border = "1px solid red";
      }
    }
  };

  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  var sendStr = "username=".concat(un.value, "&userpass=").concat(pass.value);
  xhr.send(sendStr);
});
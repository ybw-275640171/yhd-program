"use strict";

// var oUser = document.getElementsByClassName("username")[0];
var oUser = $(".username")[0];
var oUserbtm = $(".usernamebottom")[0];
var oPhone = $(".userphone")[0];
var oPhonebtm = $(".userphonebottom")[0];
var oPass = $(".userpass")[0];
var oPassbtm = $(".userpassbottom")[0];
var oPass1 = $(".userpass1")[0];
var oPassbtm1 = $(".userpassbottom1")[0];
var isRight = [0, 0, 0, 0];

oUser.onblur = function () {
  isUser();
  var xhr = new XMLHttpRequest();
  xhr.open("get", "http://localhost/test/2002-cli/dist/html/checkUser.php?username=" + this.value, true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // 5、接收响应
      var str = xhr.responseText; //1或者0；1：表示该用户名已经存在；0：表示该用户名不存在

      console.log(str);

      if (str == 1) {
        isRight[0] = 0;
        oUserbtm.innerHTML = "亲，不好意思，该用户已经被人使用了！";
      } else if (str == 0) {
        isRight[0] = 1;
        oUserbtm.innerHTML = "√";
      }
    }
  }; // 4、发送请求


  xhr.send();
};

oPhone.onblur = function () {
  isPhone();
};

oPass.onblur = function () {
  isPass();
};

oPass.onchange = function () {
  // oPass2.value = "";
  isRight[3] = 0;
  isPass1();
};

oPass1.onblur = function () {
  isPass1();
};

function isUser() {
  var reg = /^[_a-zA-Z]\w{5,15}$/;

  if (reg.test(oUser.value)) {
    isRight[0] = 1;
  } else {
    isRight[0] = 0;
    oUserbtm.innerHTML = "×，数字，字母，下划线组成，不能以数字开头，6-16位";
  }
}

function isPhone() {
  var reg = /^(1|\+861)[3-8]{1}\d{9}$/;

  if (reg.test(oPhone.value)) {
    isRight[1] = 1;
    oPhonebtm.innerHTML = "√";
  } else {
    isRight[1] = 0;
    oPhonebtm.innerHTML = "×，请输入正确的手机号";
  }
}

function isPass() {
  var reg = /^[\da-zA-Z]{6,16}$/;

  if (reg.test(oPass.value)) {
    isRight[2] = 1;
    oPassbtm.innerHTML = "√";
  } else {
    isRight[2] = 0;
    oPassbtm.innerHTML = "×，6-16位数字和字母";
  }
}

function isPass1() {
  // 前提：保证二次输入的密码也必须符合规范（）
  var reg = /^[\da-zA-Z]{6,16}$/;

  if (reg.test(oPass1.value)) {
    isRight[3] = 1;
    oPassbtm1.innerHTML = "√";
  } else {
    isRight[3] = 0;
    oPassbtm1.innerHTML = "×，6-16位数字和字母！";
    return; //
  } // 判断了两个密码是否一致


  if (oPass.value == oPass1.value) {
    isRight[3] = 1;
    oPassbtm1.innerHTML = "√";
  } else {
    isRight[3] = 0;
    oPassbtm1.innerHTML = "×，两次密码不一致";
  }
}

var oForm = document.getElementById("f");
console.log(oForm);

oForm.onsubmit = function (event) {
  var sum = 0;
  isRight.forEach(function (item) {
    sum += item;
  });

  if (sum == 4) {} else {
    var e = event || window.event;
    e.preventDefault();
  }
};
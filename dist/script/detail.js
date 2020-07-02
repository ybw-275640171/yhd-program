"use strict";

// 放大镜
var oMirroBox = $(".mirrobox")[0];
var oImgBox = $(".imgBox")[0];
var oShowBox = $(".showbox")[0];
var boxOffsetLeft = oImgBox.offsetLeft;
var boxOffsetTop = oImgBox.offsetTop;
var boxWidth = oImgBox.offsetWidth;
var boxHeight = oImgBox.offsetHeight;
var mirroWidth = oMirroBox.offsetWidth;
var mirroHeight = oMirroBox.offsetHeight;

oImgBox.onmousemove = function (event) {
  var e = event || window.event; // 1计算数据

  var left1 = e.pageX - boxOffsetLeft - 60;
  var top1 = e.pageY - boxOffsetTop - 60; // 2处理边界

  if (left1 < 0) {
    left1 = 0;
  } else if (left1 + 120 > boxWidth) {
    left1 = boxWidth - 120;
  }

  if (top1 < 0) {
    top1 = 0;
  } else if (top1 + 120 > boxHeight) {
    top1 = boxHeight - 120;
  }

  oMirroBox.style.left = left1 + "px";
  oMirroBox.style.top = top1 + "px";
  oShowBox.style.backgroundPosition = "-".concat(left1 * 2, "px -").concat(top1 * 2, "px");
};

oImgBox.onmouseover = function () {
  oMirroBox.style.display = "block";
  oShowBox.style.display = "block";
};

oImgBox.onmouseout = function () {
  oMirroBox.style.display = "none";
  oShowBox.style.display = "none";
}; // 下面的列表增加事件


var oLis = $(".oli");

var _loop = function _loop(i, len) {
  oLis[i].onmousemove = function (event) {
    var e = event || window.event;
    e.stopPropagation();
    var aaa = oLis[i].children;
    console.log(aaa[0].src);
    oImgBox.style.backgroundImage = "url(".concat(aaa[0].src, ")");
    oShowBox.style.backgroundImage = "url(".concat(aaa[0].src, ")");
  };
};

for (var i = 0, len = oLis.length; i < len; i++) {
  _loop(i, len);
} // + 与 -


var add = $(".add")[0];
var reduce = $(".reduce")[0];
var txtnum = $(".txtnum")[0];
var num = txtnum.value;

add.onclick = function () {
  if (num <= 199 && num >= 0) {
    num++;
    txtnum.value = num;
  } else {
    alert("亲亲 数量不符合要求呢");
  }
};

reduce.onclick = function () {
  if (num <= 199 && num > 1) {
    num--;
    txtnum.value = num;
  } else {
    alert("亲亲 数量不符合要求呢");
  }
};
"use strict";

// 轮播图
var mySwiper = new Swiper('.swiper-container', {
  autoplay: true,
  //等同于以下设置

  /*autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    },*/
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'custom'
  }
}); // 抢购倒计时

var hour = $(".timehour").text();
var min = $(".timemin").text();
var second = $(".timesecond").text();
var time2 = null;
time2 = setInterval(function () {
  if (second == 0) {
    second = 60;
  }

  $(".timesecond").text(--second);

  if (second == 59) {
    if (min == 0) {
      min = 60;
    }

    $(".timemin").text(--min);
  }

  if (min == 59) {
    if (hour == 0) {
      clearInterval(time2);
      alert("时间到");
    }

    $(".timehour").text(--hour);
  }
}, 1000); // 吸顶效果

var navBox = $("#daohanglan");

window.onscroll = function () {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  if (scrollTop >200) {
    window.setTimeout(function(){
      navBox.slideDown(150);
      navBox.css({
        position: 'fixed',
        top: '0px',
        display: 'block'
      });
    },400)
  } else if(scrollTop <=200 || screenTop ==0){
    navBox.css(
      {position: 'static',
      top: '0px',
      display: 'none'
    });
  }
};


// 商品列表蒙版效果
// let goodscon = $(".goodscon");

// goodscon.each(function(index){
//     goodscon.eq(index).hover(function(){
//       goodscon.eq(index).children().eq(3).animate({
//         opacity:"1"
//       })
//     },function(){
//       goodscon.eq(index).children().eq(3).animate({
//         opacity:"0"
//       })
//     })
// })



// 商品列表进入页面加载数据
window.onload = function(){
  let xhr = new XMLHttpRequest();
  xhr.open("get","http://localhost/test/2002-cli/dist/html/list.php",true);
  xhr.send(null)
  xhr.onreadystatechange  =function(){
    if(xhr.readyState == 4){
      if(xhr.status >= 200&&xhr.status<300){
         var res = JSON.parse(this.responseText);
        console.log(res);
        console.log(typeof(res));
        $.each(res,function (index,item){
          var goodsDom = 
          '<li class="goodscon">'+
                '<a class="goodsimg">'+
                    '<img src="'+item.imgurl+'" alt="">'+
                '</a>'+
                '<p class="goodsname">'+
                    item.title+
                '</p>'+
                '<p class="goodsprice">'+
                    item.price+
               ' </p>'+
                '<div class="goodscart">'+
                   ' <div class="goodsadd">'+
                        '<a code="'+item.code+'" href="">'+
                           ' <i class="goodscart1 iconfont icon-gouwuchezhengpin"></i>'+
                        '</a>'+
                   ' </div>'+
                    '<div class="goodsseem">'+
                        '<a href="">找相似</a>'+
                    '</div>'+
               ' </div>'+
            '</li>';
          $('.goodslist').append(goodsDom);
      })
        
        

        
      }
    }
  }
}

// $(function (){
//   // 进入页面加载数据
//   $.ajax({
//       url: 'http://localhost/test/2002-cli/dist/html/list.php',
//       type: 'get',
//       data: 'type=3',
//       dataType: 'json',
//       success: function (json){        
//           $.each(json,function (index,item){
//             console.log(item[index]);
            
//               // var goodsDom = 
//               // '<div class="goods">'+
//               //     '<img src="'+item.imgurl+'" alt="">'+
//               //     '<p>'+item.price+'</p>'+
//               //     '<h3>'+item.title+'</h3>'+
//               //     '<div code="'+item.code+'">加入购物车</div>'+
//               // '</div>';
//               // $('.content').append(goodsDom);
//           })
//       }
//   });
// })
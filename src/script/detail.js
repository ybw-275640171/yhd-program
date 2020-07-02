// 放大镜
let oMirroBox = $(".mirrobox")[0];
let oImgBox = $(".imgBox")[0];
let oShowBox =$(".showbox")[0];
let boxOffsetLeft = oImgBox.offsetLeft;
let boxOffsetTop = oImgBox.offsetTop;

let boxWidth = oImgBox.offsetWidth;
let boxHeight =oImgBox.offsetHeight;

let mirroWidth = oMirroBox.offsetWidth;
let mirroHeight = oMirroBox.offsetHeight;

oImgBox.onmousemove = function(event){
    let e =event || window.event;
    // 1计算数据
    let left1 = e.pageX - boxOffsetLeft - 60;
    let top1 = e.pageY - boxOffsetTop - 60;
    // 2处理边界
    if(left1<0){
        left1 = 0;
    }else if(left1+120>boxWidth){
        left1 = boxWidth - 120;
    }

    if(top1<0){
        top1 = 0;
    }else if(top1+120>boxHeight){
        top1 = boxHeight - 120;
    }
    oMirroBox.style.left = left1+"px";
    oMirroBox.style.top = top1+"px";   

    oShowBox.style.backgroundPosition =`-${left1*2}px -${top1*2}px`;
}
oImgBox.onmouseover = function(){
    oMirroBox.style.display = "block";
    oShowBox.style.display = "block";
}
oImgBox.onmouseout = function(){
    oMirroBox.style.display = "none";
    oShowBox.style.display = "none";
}
// 下面的列表增加事件
let oLis = $(".oli");
for(let i=0,len=oLis.length;i<len;i++){    
    oLis[i].onmousemove = function(event){
        let e = event || window.event;
        e.stopPropagation();
        var aaa = oLis[i].children;             
        console.log(aaa[0].src);
        oImgBox.style.backgroundImage =`url(${aaa[0].src})`;
        oShowBox.style.backgroundImage =`url(${aaa[0].src})`;

        
    }
}


// + 与 -
let add = $(".add")[0];
let reduce = $(".reduce")[0];
let txtnum = $(".txtnum")[0];
let num = txtnum.value

add.onclick = function(){
    if(num<=199&&num>=0){
        num++
        txtnum.value = num
    }else{
        alert("亲亲 数量不符合要求呢")
    }
}
reduce.onclick = function(){
    if(num<=199&&num>1){
        num--
        txtnum.value = num
    }else{
        alert("亲亲 数量不符合要求呢")
    }
}
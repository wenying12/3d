var xj=document.getElementById("xj");
var kj=document.getElementById("kj");
var mian=kj.getElementsByTagName("div");
var shang=document.getElementById("shang");
var xia=document.getElementById("xia");
var yi=6;

xia.onclick=function(){
  if(yi==1){return};
    mian[yi-1].style="transform:rotateX(-80deg)";
    yi--;
    mian[yi-1].style="transform:rotateX(10deg)";
};
shang.onclick=function(){
  if(yi==6)return;
  mian[yi-1].style.transform="rotateX(10deg)";
  yi++;
  mian[yi-1].style.transform="rotateX(0deg)";
};

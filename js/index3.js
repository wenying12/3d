var xj=document.getElementById("xj")
var zuo=document.getElementById("zuo");
var you=document.getElementById("you");
var kj=document.getElementsByClassName("kj");
var cs=0;
var gs=5;
var aa='<div class="kj"><div class="mian"></div><div class="mian"></div><div class="mian"></div><div class="mian"></div><div class="mian"></div><div class="mian"></div></div>';
var bb='';
for(var i=0;i<gs;i++){
  bb+=aa;
}
xj.innerHTML=bb;
zuo.onclick=function () {
  cs++;
  var jiaodu=cs*90;
  for (var i = 0; i < gs; i++) {
    kj[i].style="transition:all 500ms "+100*i+"ms; transform:rotateX("+jiaodu+"deg) ";
  }
}
you.onclick=function () {
  cs-- ;
  var jiaodu=cs*90;
  for (var i = 0; i < gs; i++) {
    kj[i].style="transition:all 500ms "+100*i+"ms; transform:rotateX("+jiaodu+"deg) ";
  }
}

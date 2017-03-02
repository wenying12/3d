var js=document.getElementById("js");
var pt=document.getElementsByClassName("pt");
var gs=24;
var aa='<div class="pt"><div class="mian"></div><div class="mian"></div><div class="mian"></div><div class="mian"></div><div class="mian"></div><div class="mian"></div><div class="mian"></div><div class="mian"></div><div class="mian"></div><div class="mian"></div><div class="mian"></div><div class="mian"></div><div class="mian"></div><div class="mian"></div><div class="mian"></div><div class="mian"></div><div class="mian"></div><div class="mian"></div><div class="mian"></div><div class="mian"></div><div class="mian"></div><div class="mian"></div><div class="mian"></div><div class="mian"></div></div>'
var bb="";
for(var i=0; i<gs; i++){
  bb+=aa;
}
var i=0;
js.innerHTML=bb;
js.onmouseover=function(){
  console.log(2);
  if(!pt[i].id){
    pt[i].style="transition:all 1000ms;transform:rotateX(-0deg)rotateY(-270deg)";
  }
}
js.onmouseout=function(){
  console.log(2);
  if(!pt[i].id){
    pt[i].style="transition:all 1000ms;transform:rotateX(-0deg)rotateY(0deg)";
  }
}

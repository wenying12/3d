var btn=document.getElementById("btn");
var kj=document.getElementById("kj");
var div=kj.getElementsByTagName("div");
console.log(div);
btn.onclick=function() {
if(i=9){
  for(var i=9;i>0;i--){
   if(i==1){
     console.log(1);
     div[i].style="transition:all 2000ms "+(8-i)*200+"ms;"+"transform:rotateX(-175deg) translateZ(0px);";

   }else{
     div[i].style="transition:all 2000ms "+(8-i)*200+"ms;"+"transform:rotateX(180deg);";
   }
 }
 }else if(i=0){
   console.log(2);
  for(var i=1;i<=9;i++){
   if(i==1){
     div[i].style="transition:all 2000ms "+(8-i)*200+"ms;"+"transform:rotateX(0deg) translateZ(0px);";

   }else{
     div[i].style="transition:all 2000ms "+(8-i)*200+"ms;"+"transform:rotateX(0deg);";
}
}
}
}

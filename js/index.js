
  var xj=document.getElementById("xj");
  var kj=document.getElementById("kj");
  var cishu=0;

  kj.onclick=function () {
    cishu++;
    var jiaodu=40*cishu;
    kj.style.transform="rotateY("+jiaodu+"deg)translateZ(-275px)"
  }

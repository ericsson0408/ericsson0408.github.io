
var Today=new Date();
var Year=Today.getFullYear();
var Month=Today.getMonth()+1;
var Date=Today.getDate();
var Days=0;
if (Month=='2'){Days+=31;}
if (Month=='3'){Days+=59;}
if (Month=='4'){Days+=90;}
if (Month=='5'){Days+=120;}
if (Month=='6'){Days+=151;}
if (Month=='7'){Days+=181;}
if (Month=='8'){Days+=212;}
if (Month=='9'){Days+=243;}
if (Month=='10'){Days+=273;}
if (Month=='11'){Days+=304;}
if (Month=='12'){Days+=334;}
Days+=Date;

function CD1(){
var a=document.getElementById("D1").innerHTML;
Year_1=parseInt(a[0]+a[1]+a[2]);
Month_1=parseInt(a[4]+a[5]);
Date_1=parseInt(a[7]+a[8]);
document.getElementById("CD1").innerHTML=Days;
}
function CD2(){
document.getElementById("CD2").innerHTML="今天日期是"+Year+"年"+Month+"月"+Date+"日";
}
function CD3(){
document.getElementById("CD3").innerHTML="今天日期是"+Year+"年"+Month+"月"+Date+"日";
}
function CD4(){
document.getElementById("CD4").innerHTML="今天日期是"+Year+"年"+Month+"月"+Date+"日";
}

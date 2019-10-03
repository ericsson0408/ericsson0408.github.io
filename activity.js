
var Today=new Date();
var Year=Today.getFullYear();
var Month=Today.getMonth()+1;
var Date=Today.getDate();
function CD1(){
var a=document.getElementById("D1").innerHTML;
Year_1=parseInt(a[0]+a[1]+a[2]);
Month_1=parseInt(a[4]+a[5]);
Date_1=parseInt(a[7]+a[8]);
document.getElementById("CD2").innerHTML=Year_1+Month_1+Date_1;
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

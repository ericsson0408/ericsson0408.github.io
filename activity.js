var Today=new Date();
var YearT=Today.getFullYear();
var MonthT=Today.getMonth()+1;
var DateT=Today.getDate();

function Days(Month, Date){
var Day=0;
if (Month=='2'){Day+=31;}
if (Month=='3'){Day+=59;}
if (Month=='4'){Day+=90;}
if (Month=='5'){Day+=120;}
if (Month=='6'){Day+=151;}
if (Month=='7'){Day+=181;}
if (Month=='8'){Day+=212;}
if (Month=='9'){Day+=243;}
if (Month=='10'){Day+=273;}
if (Month=='11'){Day+=304;}
if (Month=='12'){Day+=334;}
Day+=Date;
return Day;
} 

function Count(id){
var a=document.getElementById(id).innerHTML;
var CYear=parseInt(a[0]+a[1]+a[2]);
var CMonth=parseInt(a[4]+a[5]);
var CDate=parseInt(a[7]+a[8]);
var Ccount=(CYear-108)*365+Days(CMonth,CDate)-Days(MonthT, DateT);
return Ccount;
}

function CD1(){
document.getElementById("CD1").innerHTML="倒數"+ Count("D1") +"天";
}

function CD2(){
document.getElementById("CD2").innerHTML="倒數"+ Count("D2") +"天";
}

function CD3(){
document.getElementById("CD3").innerHTML="倒數"+ Count("D3") +"天";
}
function CD4(){
document.getElementById("CD4").innerHTML="倒數"+ Count("D3") +"天";
}

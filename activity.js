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
var Ccount=(CYear-109)*365+Days(CMonth,CDate)-Days(MonthT, DateT);
return Ccount;
}

function CD(){
document.getElementById("CD1").innerHTML="倒數"+ Count("D1") +"天";
document.getElementById("CD2").innerHTML="倒數"+ Count("D2") +"天";
document.getElementById("CD3").innerHTML="倒數"+ Count("D3") +"天";
document.getElementById("CD4").innerHTML="倒數"+ Count("D4") +"天";
document.getElementById("CD5").innerHTML="倒數"+ Count("D5") +"天";
}
function BTall(a){
    var com=a+'all';
    if( document.getElementById(com).style.display=="block"){
    document.getElementById(com).style.display="none";
    }
    else{document.getElementById(com).style.display="block";} 
}
function BT(a){
    var com=a;
    if( document.getElementById(com).style.display=="block"){
    document.getElementById(com).style.display="none";
    }
    else{document.getElementById(com).style.display="block";} 
} 
function MC(){  BTall("MC");    }
function MC1(){ BT("MC1");      }
function MC2(){ BT("MC2");      }
function MC3(){ BT("MC3");      }
function MC4(){ BT("MC4");      }
function MC5(){ BT("MC5");      }
function MC6(){ BT("MC6");      }
function MC7(){ BT("MC7");      }
function MC8(){ BT("MC8");      }
function MC9(){ BT("MC9");      }
function MC10(){ BT("MC10");      }
function MC11(){ BT("MC11");      }
function MC12(){ BT("MC12");      }

function CP(){  BTall("CP");    }
function CP1(){ BT("CP1");      }
function CP2(){ BT("CP2");      }
function CP3(){ BT("CP3");      }

function OC(){ BTall("OC");     }
function OC1(){ BT("OC1");      }
function OC2(){ BT("OC2");      }
function OC3(){ BT("OC3");      }
function OC4(){ BT("OC4");      }
function OC5(){ BT("OC5");      }
function OC6(){ BT("OC6");      }
function OC7(){ BT("OC7");      }
function OC8(){ BT("OC8");      }
function OC9(){ BT("OC9");      }
function OC10(){ BT("OC10");      }
function OC11(){ BT("OC11");      }
function OC12(){ BT("OC12");      }
function OC13(){ BT("OC13");      }

var Today=new Date();
var YearT=Today.getFullYear();
var MonthT=Today.getMonth()+1;
var DateT=Today.getDate();

function Leap(Year){
var count=0;
Year=parseInt(Year);
if (Year/4==0){
    count+=1;
    if(Year/100==0){
        count-=1;
        if(Year/400==0){
            count+=1;
        }
    }
}
    return count;
}

function Days(Year,Month, Date){
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
if (Month>2){Day+=Leap(Year);}
Day+=Date;
return Day;
} 

function Count(id){
var a=document.getElementById(id).innerHTML;
var CYear=parseInt(a[0]+a[1]+a[2]);
var CMonth=parseInt(a[4]+a[5]);
var CDate=parseInt(a[7]+a[8]);
var Ccount=(CYear+1911-YearT)*365+Days(CYear,CMonth,CDate)-Days(YearT,MonthT, DateT);
return Ccount;
}

function CD(){
document.getElementById("CD1").innerHTML="倒數"+ Count("D1") +"天";
document.getElementById("CD2").innerHTML="倒數"+ Count("D2") +"天";
document.getElementById("CD3").innerHTML="倒數"+ Count("D3") +"天";
document.getElementById("CD4").innerHTML="倒數"+ Count("D4") +"天";
document.getElementById("CD5").innerHTML="倒數"+ Count("D5") +"天";
document.getElementById("CD6").innerHTML="倒數"+ Count("D6") +"天";
document.getElementById("CD7").innerHTML="倒數"+ Count("D7") +"天";
document.getElementById("CD8").innerHTML="倒數"+ Count("D8") +"天";
document.getElementById("CD9").innerHTML="倒數"+ Count("D9") +"天";
document.getElementById("CD10").innerHTML="倒數"+ Count("D10") +"天";
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

function TT(){ BTall("TT");     }
function TT1(){ BT("TT1");      }
function TT2(){ BT("TT2");      }
function TT3(){ BT("TT3");      }
function TT4(){ BT("TT4");      }
function TT5(){ BT("TT5");      }
function TT6(){ BT("TT6");      }
function TT7(){ BT("TT7");      }
function TT8(){ BT("TT8");      }
function TT9(){ BT("TT9");      }
function TT10(){ BT("TT10");      }
function TT11(){ BT("TT11");      }
function TT12(){ BT("TT12");      }

function FT(){ BTall("FT");     }
function FT1(){ BT("FT1");      }
function FT2(){ BT("FT2");      }
function FT3(){ BT("FT3");      }
function FT4(){ BT("FT4");      }
function FT5(){ BT("FT5");      }
function FT6(){ BT("FT6");      }
function FT7(){ BT("FT7");      }
function FT8(){ BT("FT8");      }
function FT9(){ BT("FT9");      }
function FT10(){ BT("FT10");      }
function FT11(){ BT("FT11");      }
function FT12(){ BT("FT12");      }

function YT(){ BTall("YT");     }
function YT1(){ BT("YT1");      }
function YT2(){ BT("YT2");      }
function YT3(){ BT("YT3");      }
function YT4(){ BT("YT4");      }
function YT5(){ BT("YT5");      }
function YT6(){ BT("YT6");      }
function YT7(){ BT("YT7");      }
function YT8(){ BT("YT8");      }
function YT9(){ BT("YT9");      }
function YT10(){ BT("YT10");      }
function YT11(){ BT("YT11");      }
function YT12(){ BT("YT12");      }
function YT13(){ BT("YT13");      }
function YT14(){ BT("YT14");      }
function YT15(){ BT("YT15");      }
function YT16(){ BT("YT16");      }

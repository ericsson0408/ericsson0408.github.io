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

function SV(){  BTall("SV");    }
function SV1(){ BT("SV1");      }
function SV2(){ BT("SV2");      }

function DD(){  BTall("DD");  }
function DD1(){ BT("DD1");  }
function DD2(){ BT("DD2");  }
function DD3(){ BT("DD3");  }
function DD4(){ BT("DD4");  }
function DD5(){ BT("DD5");  }
function DD6(){ BT("DD6");  }
function DD7(){ BT("DD7");  }
function DD8(){ BT("DD8");  }
function DD9(){ BT("DD9");  }
function DD10(){ BT("DD10");  }
function DD11(){ BT("DD11");  }
function DD12(){ BT("DD12");  }

function HK1(){ BT("HK1");      }
function HK2(){ BT("HK2");      }
function HK3(){ BT("HK3");      }

var f = function(){
    // do something
}
var elems = document.getElementsByClassName("section_title");
for (var i=0, len=elems.length; i < len; i++) elems[i].onclick = f;    

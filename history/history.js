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

function CS(){  BTall("CS");    }
function CS1(){ BT("CS1");      }
function CS2(){ BT("CS2");      }

function SV(){  BTall("SV");    }
function SV1(){ BT("SV1");      }
function SV2(){ BT("SV2");      }

function DS(){  BTall("DS");  }
function DS0(){ BT("DS0");  }
function DS1(){ BT("DS1");  }
function DS2(){ BT("DS2");  }
function DS3(){ BT("DS3");  }
function DS4(){ BT("DS4");  }
function DS5(){ BT("DS5");  }
function DS6(){ BT("DS6");  }
function DS7(){ BT("DS7");  }
function DS8(){ BT("DS8");  }
function DS9(){ BT("DS9");  }
function DS10(){ BT("DS10");  }
function DS11(){ BT("DS11");  }
function DS12(){ BT("DS12");  }

function DF(){  BTall("DF");  }
function DF0(){ BT("DF0");  }
function DF1(){ BT("DF1");  }
function DF2(){ BT("DF2");  }
function DF3(){ BT("DF3");  }
function DF4(){ BT("DF4");  }
function DF5(){ BT("DF5");  }
function DF6(){ BT("DF6");  }
function DF7(){ BT("DF7");  }
function DF8(){ BT("DF8");  }
function DF9(){ BT("DF9");  }
function DF10(){ BT("DF10");  }
function DF11(){ BT("DF11");  }
function DF12(){ BT("DF12");  }



function HK1(){ BT("HK1");      }
function HK2(){ BT("HK2");      }
function HK3(){ BT("HK3");      }

var f = function(){
    // do something
}
var elems = document.getElementsByClassName("section_title");
for (var i=0, len=elems.length; i < len; i++) elems[i].onclick = f;    

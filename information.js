function ShowAnswer(){
var date = new Date();
var number = date.getMilliseconds();
document.getElementById("AnswerBox").innerHTML=number;
}

function abc(){
  var A = [];
  A[0]=["ant",0, 0, 0];
  A[1]=["bat",0, 0, 1];
  A[2]=["cat",0, 1, 0];
  A[3]=["dog",0, 1, 1];
  A[4]=["egg",1, 0, 0];
  A[5]=["fog",1, 0, 1];
  A[6]=["gem",1, 1, 0];
  A[7]=["hat",1, 1, 1];
  var B=[];
  B=[0,0,0,0,0,0,0,0];
  var obj=document.getElementsByName("test");
if (obj[0].checked == true){
  for(i=0;i<8;i++){
			if(A[i][1]==1){B[i]+=1;}
			}
   }
if (obj[1].checked == true){for(i=0;i<8;i++){
			if(A[i][2]==1){
			B[i]+=1;
			}
			}
    }
if (obj[2].checked == true){for(i=0;i<8;i++){
			if(A[i][3]==1){
			B[i]+=1;
			}
			}
}
var kk=0;
var C=[];
for(i=0;i<8;i++){if(B[i]>0){
	C[kk]=A[i][0];
	kk=kk+1;}
}

document.getElementById("Testabc").innerHTML=C;
}

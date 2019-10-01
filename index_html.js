function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}
function Function(){
    document.getElementById("cal").innerHTML = parseInt(document.getElementById("cal").innerHTML) + 1;
}
function add() {
    var a = parseInt(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);
    document.getElementById('result').value =  a+b ; 
}
function plus() {
    document.getElementById("candy").value = parseInt(document.getElementById("candy").value) + 1; 
}
function check(){
    if (document.getElementById('pass').value == "040889"){
      document.getElementById('resume').style.display="block";
    }
    else{alert("輸入錯誤")}
}
function CP1(){
    if( document.getElementById('CP1').style.display=="block"){
    document.getElementById('CP1').style.display="none";
    }
    else{document.getElementById('CP1').style.display="block";}
    
}

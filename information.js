function ShowAnswer(){
var date = new Date();
var number = date.getMilliseconds();
document.getElementById("AnswerBox").innerHTML=number;
}

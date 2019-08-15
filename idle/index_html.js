var Hunt = 0;
var Meat = 0;
function gather() {
    Meat = Meat +1;
    document.getElementById("meat").value = parseInt(Meat); 
}
function hunt() {
    Hunt = Hunt +1;
    document.getElementById("hunt").value = parseInt(Hunt) + 1; 
    document.getElementById("meat").value = parseInt(document.getElementById("meat").value) - 10; 
}
var myVar = setInterval(myTimer, 1000);
function myTimer() {
    document.getElementById("meat").value = parseInt(document.getElementById("meat").value) + 1*Hunt ;
}


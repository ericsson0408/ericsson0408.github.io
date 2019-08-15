var Hunt = 0;
function gather() {
    document.getElementById("meat").value = parseInt(document.getElementById("meat").value) + 1; 
}
function hunt() {
    Hunt = Hunt +1;
    document.getElementById("hunt").value = parseInt(document.getElementById("meat").value) + 1; 
    document.getElementById("meat").value = parseInt(document.getElementById("meat").value) - 10; 
}
var myVar = setInterval(myTimer, 1000);
function myTimer() {
    document.getElementById("meat").value = parseInt(document.getElementById("meat").value) + 1*Hunt ;
}


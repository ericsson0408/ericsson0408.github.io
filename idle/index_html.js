var Hunt = 0;
var Meat = 0;
function gather() {
    Meat = Meat +1;
    document.getElementById("meat").value = parseInt(Meat); 
}
function hunt() {
    Hunt = Hunt + 1;
    Meat = Meat - 10;
    document.getElementById("hunt").value = parseInt(Hunt); 
    document.getElementById("meat").value = parseInt(Meat);
    
}
var myVar = setInterval(myTimer, 1000);
function myTimer() {
    Meat = Meat + Hunt;
    document.getElementById("meat").value = parseInt(Meat);
}


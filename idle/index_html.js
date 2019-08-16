var Hunt = 0;
var Meat = 0;
var Hut = 0;
var Human = 0;
function gather() {
    Meat = Meat + 1;
    document.getElementById("meat").value = parseInt(Meat); 
}
function hut() {
    Hut = Hut + 1;
    Meat = Meat - 10;
    document.getElementById("max_human").value = parseInt(Hut);
    document.getElementById("Hut").value = parseInt(Hut); 
}

function hunt() {
    Hunt = Hunt + 1;
    document.getElementById("hunt").value = parseInt(Hunt); 
    document.getElementById("meat").value = parseInt(Meat);
}

var myVar = setInterval(myTimer, 100);
function myTimer() {
    Meat = Meat + Hunt * 0.1;
    document.getElementById("meat").value = parseInt(Meat);
    if(document.getElementById("human").value <= Hut )
    {
        Human = Human + 0.01;
        document.getElementById("human").value=parseInt(Human);
    }


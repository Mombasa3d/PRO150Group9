var paintChipsHTML = document.getElementById("chipCount");
var chiselsHTML = document.getElementById("chisels");
var workersHTML = document.getElementById("workers");
var mixersHTML = document.getElementById("mixers");

var paintChips = 0;
var chisels = 0;
var workers = 0;
var mixers = 0;
var chiselPrice = 50;
var workerPrice = 10;
var mixerPrice = 25;
var tickRate = 1000;

document.getElementById("chipButton").onclick = click;
document.getElementById("chiselButton").onclick = purchaseChisel;
document.getElementById("workerButton").onclick = purchaseWorker;
document.getElementById("mixerButton").onclick = purchaseMixer;

setInterval(tick, tickRate);

function click()
{
    var amountToIncrease = 1;

    amountToIncrease += chisels * 2.5;
    amountToIncrease += workers * 1.5;
    amountToIncrease += mixers * 2;

    paintChips += amountToIncrease;
    paintChipsHTML.innerText = paintChips;
}

function tick() {
    var amountToIncrease = 0;

    amountToIncrease += workers * 1.5;
    amountToIncrease += mixers * 1;

    paintChips += amountToIncrease;
    paintChipsHTML.innerText = paintChips;
}

function purchaseChisel()
{
    if (paintChips >= chiselPrice) {
        paintChips -= chiselPrice;
        chiselPrice = Math.round(Math.pow(chiselPrice, 1.02));
        chisels++;
        document.getElementById('chiselAmount').innerHTML = "Owned:" + chisels;
        document.getElementById('chiselPrice').innerHTML = "Price: " + chiselPrice + " chips";
    }
}

function purchaseWorker()
{
    if (paintChips >= workerPrice) {
        paintChips -= workerPrice;
        workerPrice = Math.round(Math.pow(workerPrice, 1.07));
        workers++;
        document.getElementById('workerAmount').innerHTML = "Owned: " + workerPrice;
        document.getElementById('workerPrice').innerHTML = "Price: " + workerPrice + " chips";
    }
}

function purchaseMixer() {
    if (paintChips >= mixerPrice) {
        paintChips -= mixerPrice;
        workerPrice = Math.round(Math.pow(mixerPrice, 1.04));
        mixers++;
        document.getElementById('chiselButton').innerHTML = "Buy Mixer " + mixers;
    }
}



$("#SaveButton").click(function (e) {
    console.log("SaveButton Clicked");

    e.preventDefault();
    $.ajax({

        url: "Home/Save", // comma here instead of semicolon   
        success: function (paintChips,chisels,workers,mixers) {
            alert("Saved");  // or any other indication if you want to show
        }
    })
})
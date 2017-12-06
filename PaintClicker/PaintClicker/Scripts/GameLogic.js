var paintChips = 0;
var chisels = 0;
var chiselPrice = 50;
var workers = 0;
var workerPrice = 10;
var mixers = 0;
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

    document.getElementById("chipCount").innerHTML = paintChips;
    Console.log("Test");
}

function tick() {
    console.log("test");
    var amountToIncrease = 0;

    amountToIncrease += workers * 1.2;
    amountToIncrease += mixers * 1;

    paintChips += amountToIncrease;

    document.getElementById("chipCount").innerHTML = paintChips;
}

function purchaseChisel()
{
    if (paintChips >= chiselPrice) {
        paintChips -= chiselPrice;
        chiselPrice = Math.round(Math.pow(chiselPrice, 1.02));
        chisels++;
    }
}

function purchaseWorker()
{
    if (paintChips >= workerPrice) {
        paintChips -= workerPrice;
        workerPrice = Math.round(Math.pow(workerPrice, 1.07));
        workers++;
    }
}

function purchaseMixer() {
    if (paintChips >= mixerPrice) {
        paintChips -= mixerPrice;
        workerPrice = Math.round(Math.pow(mixerPrice, 1.04));
        mixers++;
    }
}
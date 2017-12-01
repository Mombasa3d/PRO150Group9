var paintChips = 0;
var chisels = 0;
var chiselPrice = 50;
var workers = 0;
var workerPrice = 10;
var tickRate = 1000;

document.getElementById("chiselButton").onclick = purchaseChisel;
document.getElementById("workerButton").onclick = purchaseWorker;
setInterval(tick, tickRate);

function click()
{
    var amountToIncrease = 1;

    amountToIncrease += chisels * 0.5;

    paintChips += amountToIncrease;

    document.getElementById("chipCount").innerHTML = paintChips;
}

document.getElementById("chipButton").onclick = click;

function tick() {
    console.log("test");
    var amountToIncrease = 0;

    amountToIncrease += workers * 1;

    paintChips += amountToIncrease;

    document.getElementById("chipCount").innerHTML = paintChips;
}

function purchaseChisel()
{
    if (paintChips >= chiselPrice) {
        paintChips -= chiselPrice;
        chiselPrice = Math.round(Math.pow(chiselPrice, 1.05));
        chisels++;
    }
}

function purchaseWorker()
{
    if (paintChips >= workerPrice) {
        paintChips -= workerPrice;
        workerPrice = Math.round(Math.pow(workerPrice, 1.05));
        workers++;
    }
}

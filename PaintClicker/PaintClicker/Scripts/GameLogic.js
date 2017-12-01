var paintChips = 0;
var chisels = 0;
var chiselPrice = 10;
var workers = 0;
var workerPrice = 100;
var tickRate = 1000;

function click()
{
    var amountToIncrease = 1;

    amountToIncrease += chisels * 0.5;

    paintChips += amountToIncrease;

    document.getElementById("chipCount").innerHTML = paintChips;
}

document.getElementById("chipButton").onclick = click;

function tick()
{
    var amountToIncrease = 0;

    amountToIncrease += workers * 1;

    paintChips += amountToIncrease;

    document.getElementById("chipCount").innerHTML = paintChips;
}

function updateAutoClick()
{
    setInterval(tick, tickRate);
}

updateAutoClick();

function purchaseChisel()
{
    if (paintChips >= chiselPrice) {
        paintChips -= chiselPrice;
        chiselPrice = Math.round(Math.pow(chiselPrice, 1.05));
        chisels++;
        document.getElementById("chipCount").innerHTML = paintChips;
    }
}

function purchaseWorker()
{
    if (paintChips >= workerPrice) {
        paintChips -= workerPrice;
        workerPrice = Math.Round(Math.Pow(workerPrice, 1.05));
        workers++;
        document.getElementById("chipCount").innerHTML = paintChips;
    }
}

document.getElementById("chiselButton").onclick = purchaseChisel();
document.getElementById("workerButton").onclick = purchaseWorker();

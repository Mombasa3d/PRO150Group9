var paintChips = 0;
var chisels = 0;
var chiselPrice = 10;
var workers = 0;
var workerPrice = 100;
var tickRate = 0;

function click()
{
    var amountToIncrease = 1;

    amountToIncrease += chisels * 0.5;

    paintChips += amountToIncrease;
}

document.getElementById("chipButton").onclick = click;

function tick()
{
    var amountToIncrease = 0;

    amountToIncrease += workers * 1;

    paintChips += amountToIncrease;
}

function updateAutoClick()
{
    setInterval(tick, tickRate);
}

updateAutoClick();

function purchaseItem(item)
{
    switch (item)
    {
        case: chisel
            chiselPrice = Math.round(Math.pow(chiselPrice, 1.05));
            chisels++;
            break;
        case worker:
            workerPrice = Math.Round(Math.Pow(workerPrice, 1.05));
            workers++;
            break;
    }
}

document.getElementById("chiselButton").onclick = purchaseItem(chisel);
document.getElementById("workerButton").onclick = purchaseItem(chisel);

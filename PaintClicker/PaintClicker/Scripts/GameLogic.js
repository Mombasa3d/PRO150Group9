var paintChips = parseInt(document.getElementById("chipCount").innerText);
var chisels = parseInt(document.getElementById("chiselAmount").innerText);
var chiselPrice = 50;
var workers = parseInt(document.getElementById("workerAmount").innerText);
var workerPrice = 10;
var mixers = parseInt(document.getElementById("mixerAmount").innerText);
var mixerPrice = 25;
var tickRate = 1000/10;
var chipsStart = 0
var chipsEnd = 0;
var minute = [];

for (var i = 0; i < chisels; i++) {
    chiselPrice = Math.round(Math.pow(chiselPrice, 1.02));
}

for (var i = 0; i < workers; i++) {
    workerPrice = Math.round(Math.pow(workerPrice, 1.07));
}

for (var i = 0; i < mixers; i++) {
    mixerPrice = Math.round(Math.pow(mixerPrice, 1.04));
}

document.getElementById("workerPrice").innerHTML = workerPrice;
document.getElementById("chiselPrice").innerHTML = chiselPrice;
document.getElementById("mixerPrice").innerHTML = mixerPrice;
document.getElementById("chipButton").onclick = click;
document.getElementById("chiselButton").onclick = purchaseChisel;
document.getElementById("workerButton").onclick = purchaseWorker;
document.getElementById("mixerButton").onclick = purchaseMixer;
setInterval(tick, tickRate);
setInterval(calculateChipsPerSecond, 1000);

function calculateChipsPerSecond() {
    chipsEnd = paintChips;
    var chipsThisSecond = chipsEnd - chipsStart;

    if (minute.length == 5)
    {
        minute.shift();
    }

    if (chipsThisSecond >= 0)
    {
        minute.push(chipsThisSecond);
    }

    var avg = 0;

    for (var i = 0; i < minute.length; i++)
    {
        avg += minute[i];
    }

    if (avg != 0)
    {
        avg = avg/minute.length;
        avg = Math.round(avg);
    }

    document.getElementById("chipsPerSecond").innerHTML = avg;

    chipsStart = paintChips;
}

function click() {
    var amountToIncrease = 1;

    amountToIncrease += chisels * 1;
    amountToIncrease += mixers * 2;

    paintChips += amountToIncrease;

    document.getElementById("chipCount").innerHTML = Math.round(paintChips);
}

function tick() {
    var amountToIncrease = 0;

    amountToIncrease += workers * 1;
    amountToIncrease += mixers * 1;

    amountToIncrease /= 10;

    paintChips += amountToIncrease;

    document.getElementById("chipCount").innerHTML = Math.round(paintChips);
}

function purchaseChisel() {
    if (paintChips >= chiselPrice) {
        paintChips -= chiselPrice;
        chiselPrice = Math.round(Math.pow(chiselPrice, 1.1));
        chisels++;

        document.getElementById("chiselAmount").innerHTML = chisels;
        document.getElementById("chiselPrice").innerHTML = chiselPrice;
    }
}

function purchaseWorker() {
    if (paintChips >= workerPrice) {
        paintChips -= workerPrice;
        workerPrice = Math.round(Math.pow(workerPrice, 1.07));
        workers++;

        document.getElementById("workerAmount").innerHTML = workers;
        document.getElementById("workerPrice").innerHTML = workerPrice;
    }
}

function purchaseMixer() {
    if (paintChips >= mixerPrice) {
        paintChips -= mixerPrice;
        mixerPrice = Math.round(Math.pow(mixerPrice, 1.5));
        mixers++;

        document.getElementById("mixerAmount").innerHTML = mixers;
        document.getElementById("mixerPrice").innerHTML = mixerPrice;
    }
}

$("#SaveButton").click(save)
function save(e) {
    e.preventDefault();
    $.ajax({

        url: "Home/Save?PaintChips=" + Math.floor(paintChips) + "&Chisels=" + Math.floor(chisels) + "&Workers=" + Math.floor(workers) + "&Mixers=" + Math.floor(mixers) + "&Name=" + document.getElementById("UserName").innerText,
        success: function () {
            alert("Saved");
        }
    })
}

function saveInterval() {
    $.ajax({
        url: "Home/Save?PaintChips=" + Math.floor(paintChips) + "&Chisels=" + Math.floor(chisels) + "&Workers=" + Math.floor(workers) + "&Mixers=" + Math.floor(mixers) + "&Name=" + document.getElementById("UserName").innerText,
        success: function () {
        }
    })
}

setInterval(saveInterval, 1000*5)
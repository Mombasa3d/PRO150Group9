var paintChips = parseInt(document.getElementById("chipCount").innerHTML);
var chisels = parseInt(document.getElementById("chisels").innerHTML);
var chiselPrice = 50;
var workers = parseInt(document.getElementById("workers").innerHTML);
var workerPrice = 10;
var mixers = parseInt(document.getElementById("mixers").innerHTML);
﻿var paintChipsHTML = document.getElementById("chipCount");
var chiselsHTML = document.getElementById("chisels");
var workersHTML = document.getElementById("workers");
var mixersHTML = document.getElementById("mixers");
var mixerPrice = 25;
var tickRate = 33;
var chipsStart = 0
var chipsEnd = 0;
var chipsThisSecond = 0;

for (var i = 0; i < chisels; i++)
{
    chiselPrice = Math.round(Math.pow(chiselPrice, 1.02));
}

for (var i = 0; i < workers; i++) {
    workerPrice = Math.round(Math.pow(workerPrice, 1.07));
}

for (var i = 0; i < mixers; i++) {
    mixerPrice = Math.round(Math.pow(mixerPrice, 1.04));
}

document.getElementById("chipButton").onclick = click;
document.getElementById("chiselButton").onclick = purchaseChisel;
document.getElementById("workerButton").onclick = purchaseWorker;
document.getElementById("mixerButton").onclick = purchaseMixer;

setInterval(tick, tickRate);
setInterval(calculateChipsPerSecond, 1000);

function calculateChipsPerSecond()
{
    chipsEnd = document.getElementById("chipCount").innerHTML;
    chipsThisSecond = chipsEnd - chipsStart;
    document.getElementById("chipsPerSecond").innerHTML = chipsThisSecond;
    chipsStart = document.getElementById("chipCount").innerHTML;
}

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

    amountToIncrease /= 30;

    paintChips += amountToIncrease;

    paintChipsHTML.innerText = Math.round(paintChips);
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

        url: "Home/Save?PaintChips=" + paintChips + "&Chisels=" + chisels + "&Workers=" + workers + "&Mixers=" + mixers + "&Email=" + document.getElementById("EmailHidden"),   
        success: function () {
            alert("Saved");
        }
    })
})
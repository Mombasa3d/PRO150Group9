var paintChips = parseInt(document.getElementById("chipCount").innerText);
var chisels = parseInt(document.getElementById("chiselAmount").innerText);
var chiselPrice = 50;
var workers = parseInt(document.getElementById("workerAmount").innerText);
var workerPrice = 10;
var mixers = parseInt(document.getElementById("mixerAmount").innerText);
var mixerPrice = 25;
var tickRate = 1000/10;
var chipsStart = 0;
var chipsEnd = 0;
var minute = [];
var ResearchBonus = 1;


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

    amountToIncrease += workers * 1 * ResearchBonus;
    amountToIncrease += mixers * 1 * ResearchBonus;

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
var thinner = document.getElementById("ResearchPaintThinner");
    document.getElementById("ResearchPaintThinner").onclick = researchThinner;
var steroids = document.getElementById("ResearchSteroids");
    document.getElementById("ResearchSteroids").onclick = researchSteroids;
var prosthetics = document.getElementById("ResearchProsthetics");
    document.getElementById("ResearchProsthetics").onclick = researchProsthetics;
var nano = document.getElementById("ResearchNanoBots");
    document.getElementById("ResearchNanoBots").onclick = researchNano;
var electric = document.getElementById("ResearchElectricChisels")
    document.getElementById("ResearchElectricChisels").onclick = researchElectric;
var plasma = document.getElementById("ResearchPlasmaChisels");
    document.getElementById("ResearchPlasmaChisels").onclick = researchPlasma;
var quantum = document.getElementById("ResearchQuantumChisels");
    document.getElementById("ResearchQuantumChisels").onclick = researchQuantum;
var antimatter = document.getElementById("ResearchAntiMatterChisels");
    document.getElementById("ResearchAntiMatterChisels").onclick = researchAntiMatter;
var oscilators = document.getElementById("ResearchOscilators");
    document.getElementById("ResearchOscilators").onclick = researchOscilators;
var collidor = document.getElementById("ResearchPaintCollidor");
    document.getElementById("ResearchPaintCollider").onclick = researchCollider;
//var multiverse = document.getElementById("ResearchPaintMultiverse").onclick = researchMultiverse;

function researchThinner() {
    if (paintChips >= 5) {
        paintChips -= 5;

        ResearchBonus += 1;
        thinner.disabled = true;
        thinner.style.backgroundColor = "#008000";
    }
}
function researchSteroids() {
    if (paintChips >= 10000) {
        paintChips -= 10000;

        ResearchBonus += 3;
        steroids.disabled = true;
        steroids.style.backgroundColor = "#008000";
    }
}
function researchProsthetics() {
    if (paintChips >= 15000) {
        paintChips -= 15000;

        ResearchBonus += 5;
        prosthetics.disabled = true;
        prosthetics.style.backgroundColor = "#008000";
    }
}
function researchNano() {
    if (paintChips >= 30000) {
        paintChips -= 30000;

        ResearchBonus *= 2;
        nano.disabled = true;
        nano.style.backgroundColor = "#008000";
    }
} function researchElectric() {
    if (paintChips >= 100000) {
        paintChips -= 100000;

        ResearchBonus *= 5;
        electric.disabled = true;
        electric.style.backgroundColor = "#008000";
    }
} function researchPlasma() {
    if (paintChips >= 250000) {
        paintChips -= 250000;

        ResearchBonus *= 8;
        plasma.disabled = true;
        plasma.style.backgroundColor = "#008000";
    }
} function researchQuantum() {
    if (paintChips >= 500000) {
        paintChips -= 500000;

        ResearchBonus *= 10;
        quantum.disabled = true;
        quantum.style.backgroundColor = "#008000";
    }
} function researchAntiMatter() {
    if (paintChips >= 750000) {
        paintChips -= 750000

        ResearchBonus *= 8;
        antimatter.disabled = true;
        antimatter.style.backgroundColor = "#008000";
    }
} function researchOscilators() {
    if (paintChips >= 1500000) {
        paintChips -= 1500000;

        ResearchBonus *= 5;
        oscilators.disabled = true;
    }
} function researchCollider() {
    if (paintChips >= 3000000) {
        paintChips -= 3000000;

        ResearchBonus *= 3;
        collidor.disabled = true;
        collidor.style.backgroundColor = "#008000";
    }
    function researchMultiverse() {
        if (paintChips >= 100000000) {
            paintChips -= 100000000;

            ResearchBonus *= 2;
            multiverse.disabled = true;
            multiverse.style.backgroundColor = "#008000";
        }
    }
}

$("#SaveButton").click(save);
function save(e) {
    e.preventDefault();
    $.ajax({

        url: "Home/Save?PaintChips=" + Math.floor(paintChips) + "&Chisels=" + Math.floor(chisels) + "&Workers=" + Math.floor(workers) + "&Mixers=" + Math.floor(mixers) + "&Name=" + document.getElementById("UserName").innerText,
        success: function () {
            alert("Saved");
        }
    });
}

function saveInterval() {
    $.ajax({
        url: "Home/Save?PaintChips=" + Math.floor(paintChips) + "&Chisels=" + Math.floor(chisels) + "&Workers=" + Math.floor(workers) + "&Mixers=" + Math.floor(mixers) + "&Name=" + document.getElementById("UserName").innerText,
        success: function () {
        }
    });
}

setInterval(saveInterval, 1000 * 5);
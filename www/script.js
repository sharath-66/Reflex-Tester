var startTime = new Date();
var endTime = new Date();
var startPressed = false;
var bgChangeStarted = false;
var maxWait = 20;
var timerID;

function startTest() {
    document.body.style.background = document.response.bgColorChange.options[document.response.bgColorChange.selectedIndex].text;
    bgChangeStarted = true;
    startTime = new Date();
}

function remark(responseTime) {
    var responseString = "";
    if (responseTime < 0.10)
        responseString = "Well done Big-Cat! 🐆";
    if (responseTime >= 0.10 && responseTime < 0.30)
        responseString = "Nice Warrior! ⚔️";
    if (responseTime >= 0.30 && responseTime < 0.45)
        responseString = "Could be better... 😊";
    if (responseTime >= 0.45 && responseTime < 0.70)
        responseString = "Keep practising! 👍";
    if (responseTime >= 0.70 && responseTime < 1)
        responseString = "Have you been drinking? 😵";
    if (responseTime >= 1)
        responseString = "Did you fall asleep? 😴";

    return responseString;
}

function stopTest() {
    if (bgChangeStarted) {
        endTime = new Date();
        var responseTime = (endTime.getTime() - startTime.getTime()) / 1000;

        document.body.style.background = "white";
        swal("Your response time is: " + responseTime + " seconds " + "\n" + remark(responseTime));
        startPressed = false;
        bgChangeStarted = false;
    }
    else {
        if (!startPressed) {
            swal("press start first to start test 😏");
        }
        else {
            clearTimeout(timerID);
            startPressed = false;
            swal("cheater! you pressed too early! \r\n Foxie 😉");
        }
    }
}

var randMULTIPLIER = 0x015a4e35;
var randINCREMENT = 1;
var today = new Date();
var randSeed = today.getSeconds();
function randNumber() {
    randSeed = (randMULTIPLIER * randSeed + randINCREMENT) % (1 << 31);
    return ((randSeed >> 15) & 0x7fff) / 32767;
}

function startit() {
    if (startPressed) {
        swal("Already started. Press stop to stop");
        return;
    }
    else {
        startPressed = true;
        timerID = setTimeout('startTest()', 6000 * randNumber());
    }
}
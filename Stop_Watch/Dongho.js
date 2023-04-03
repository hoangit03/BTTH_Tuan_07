var giayElement = document.getElementById('giay');
var phutElement = document.getElementById('phut');
var gioElement = document.getElementById('gio');

var stopElement = document.getElementById('stop');
var startElement = document.getElementById('start');
var refreshElemet = document.getElementById('refresh');



giay = 0;
gio = 0;
phut = 0;
giayElement.innerText = giay + "0";
phutElement.innerText = phut + "0";
gioElement.innerText = gio + "0";

startElement.onclick = function(i) {
    TimeS(giay)
}


function TimeS(giay) {
    var loop = setInterval(function() {
        if (giay === 60) {
            giay = 0;
            phut++;
        }
        if (giay < 10) {
            giayElement.innerText = "0" + giay;
        } else
            giayElement.innerText = giay;
        ++giay;
        if (phut < 10) {
            phutElement.innerText = "0" + phut;
        } else
            phutElement.innerText = phut;

        if (phut === 60) {
            phut = 0;
            gio++;
        }
        if (gio < 10) {
            gioElement.innerText = "0" + gio;
        } else
            gioElement.innerText = gio;
        stopElement.onclick = function(i) {
            clearInterval(loop);
        }
        startElement.onclick = function(i) {
            TimeS(giay)
        }
        refreshElemet.onclick = function() {
            giay = 0;
            phut = 0;
            gio = 0;
        }
    }, 1000)
}
var txt = document.querySelector('#txt');
var font = document.querySelector('#font');
var size = document.querySelector('#size');

load()
init()
window.onresize = load
function load() {
    txt.style.height = (window.innerHeight * 80 / 100).toString() + 'px';
}

function init() {
    txt.style.fontFamily = 'Times New Roman'
    font.style.fontFamily = 'Times New Roman'
    size.value = "14"
    txt.style.fontSize = '14px'
}

font.onchange = function () {
    txt.style.fontFamily = font.value
    font.style.fontFamily = font.value
}

size.onchange = function () {
    txt.style.fontSize = size.value + 'px'
}
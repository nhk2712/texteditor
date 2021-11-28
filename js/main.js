var txt = document.querySelector('#txt');
var font = document.querySelector('#font');
var size = document.querySelector('#size');
var bold = document.querySelector('#bold'),
    italic = document.querySelector('#italic'),
    spellcheck = document.querySelector('#spellcheck')

load()
init()
window.onresize = load
function load() {
    txt.style.height = (window.innerHeight * 80 / 100).toString() + 'px';
}

function init() {
    txt.style.fontFamily = 'Times New Roman'
    font.style.fontFamily = 'Times New Roman'
    size.value = "18"
    txt.style.fontSize = '18px'
}

font.onchange = function () {
    txt.style.fontFamily = font.value
    font.style.fontFamily = font.value
}

size.onchange = function () {
    txt.style.fontSize = size.value + 'px'
}

bold.onchange = function () {
    if (this.checked) txt.style.fontWeight = 'bold'
    else txt.style.fontWeight = 'unset'
}

italic.onchange = function () {
    if (this.checked) txt.style.fontStyle = 'italic'
    else txt.style.fontStyle = 'unset'
}

spellcheck.onchange = function () {
    if (this.checked) txt.spellcheck=true
    else txt.spellcheck=false
}
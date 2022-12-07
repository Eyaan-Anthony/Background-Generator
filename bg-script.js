var css = document.querySelector("h3");
var button = document.getElementById("rand");
var colr1 = document.querySelector(".color1");
var colr2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var init = String(getComputedStyle(body).backgroundImage);
// .backgroundImage gives me the linear gradient directly;
var first = [];
var second = [];
console.log (init);

function getColor () {
    var initArr = init.split("rgb");
    let word1 = initArr[1].slice(0, -2);
    let word2 = initArr[2].slice(0, -1); 
}


function gtRndInteger (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function generateColor (){
   for (var i = 0; i < 6; i++){
    if (i <3 ) {
        let x = gtRndInteger(0, 255);
        first.push(x);
    } else {
        let y = gtRndInteger(0, 255);
        second.push(y);
    }
    }
    convertColor();
    colr1.value = color1;
    colr2.value = color2;
    setGradient();
    first = [];
    second = [];


   }

function convertColor () {
    color1 = rgbToHex(first[0], first[1], first[2]);
    color2 = rgbToHex(second[0], second[1], second[2]);
    return color1, color2;
}

function decToHex(value) {
    if (value > 255) {
      return 'FF';
    } else if (value < 0) {
      return '00';
    } else {
      return value.toString(16).padStart(2, '0').toUpperCase();
    }
  }
function rgbToHex(r, g, b) {
    return '#' + decToHex(r) + decToHex(g) + decToHex(b);
  }

let firstColor = rgbToHex(164, 116, 116);
let secondColor = rgbToHex(64, 42, 42);

colr1.value = firstColor;
colr2.value = secondColor;

// permits us to get the actual background color of the body element
function setGradient () {
    body.style.background = "linear-gradient(to right, " + colr1.value + "," + colr2.value + ")";

    css.textContent = body.style.background + ";";
    // textContent is to display a specific text;
}

colr1.addEventListener("input", setGradient);

colr2.addEventListener("input", setGradient);

button.addEventListener("click", generateColor);

// there was an error because the getElementsbyClassName returns a collection, so to access an element;
// the index of the element should be specified
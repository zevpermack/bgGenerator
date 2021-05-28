var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var randColor1 = document.querySelector(".randColor1");
var randColor2 = document.querySelector(".randColor2");
var luckyDip = document.querySelector(".luckyDip");

//Using CSS style in JS to change the background
const gradientChange = () => {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value}`;
  css.textContent = body.style.background + ";"
}
//Random Color picker Fx
function generateRandomColor()
{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}
//Generate the color and change the gradient ot match for Color1
function randomColor1() {
  color1.value = generateRandomColor()
  gradientChange()
}
//Generate color2 and change gradient
function randomColor2(){
  color2.value = generateRandomColor()
  gradientChange()
}

function luckyDipFx(){
  randomColor1();
  randomColor2();
}

//Using an event listener of input to instantly record the change in the color picker
//In this event listener the second parameter automatically gets run so there is no need to invoke the function with ()
color1.addEventListener("input", gradientChange)
//Same thing but with color2
color2.addEventListener("input", gradientChange)
//Random Color 1 click listener
randColor1.addEventListener("click", () =>{
  randomColor1();
}
)
//Random Color 2 click listener
randColor2.addEventListener("click", () =>{
  randomColor2();
}
)
//Lucky Dip click listener
luckyDip.addEventListener("click", () => {
  luckyDipFx();
})






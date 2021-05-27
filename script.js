var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body") 

//Using CSS style in JS to change the background
const gradientChange = () => {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value}`;
  css.textContent = body.style.background + ";"
}

//Using an event listener of input to instantly record the change in the color picker
//In this event listener the second parameter automatically gets run so there is no need to invoke the function with ()

color1.addEventListener("input", gradientChange)
//Same thing but with color2
color2.addEventListener("input", gradientChange)





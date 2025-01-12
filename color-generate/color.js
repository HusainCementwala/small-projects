const containerEl = document.querySelector(".container");


for(let i =0; i<24 ;i++){

  const colorContainEl = document.createElement("div");
  colorContainEl.classList.add("color-container");  
  containerEl.appendChild(colorContainEl);
}
const textInside = document.querySelectorAll(".color-container");
 


generateColors();

function generateColors(){

  textInside.forEach((colorContainEl)=>{
 const newColorCode = randomColor();
 colorContainEl.style.backgroundColor = "#" + newColorCode;
 colorContainEl.innerHTML = `#${newColorCode}`;

 colorContainEl.addEventListener("click",()=>{

navigator.clipboard.writeText(`#${newColorCode}`);
   //this is to allow user tto directly copy the hex code // calling a function

 });
 });
}




function randomColor(){

const chars = "0123456789abcdef";
const colorCodeLength = 6;
let colorCode ='';

for(let i=0;i<colorCodeLength ;i++){

const randomNumber = Math.floor(Math.random() * chars.length);
  
  colorCode += chars.substring(randomNumber,randomNumber+1);
  //extracts a single character from chars starting at randomNumber.
}
return colorCode;
}


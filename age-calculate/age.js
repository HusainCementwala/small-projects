let userInput = document.getElementById("date");
const btn = document.querySelector(".btn");
userInput.max = new Date().toISOString().split("T")[0]; //allows user to only choose past dates and not future ones
let result = document.getElementById("result");


btn.addEventListener("click",calculateAge);

function calculateAge(){

  let birthDate = new Date(userInput.value); //date chosen by user

  let d1 = birthDate.getDate(); //getting day month year of users chosen date
  let m1 = birthDate.getMonth() + 1; //since month is starting from 0 ike an array
  let y1 = birthDate.getFullYear();

  let today = new Date(); //todays date

  let d2 = today.getDate(); //getting day month year of todays date
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let d3,m3,y3;

  y3 = y2 - y1;

  if(m2 >= m1){
    m3 = m2 - m1;
  }
  else{

    y3--; //decrease year and add below
    m3 = 12 + m2 - m1;
  }

  if(d2 > d1){

    d3 = d2 - d1;
  }
  else{
 //this requires a more functioning which is done in below function
    m3--;
    d3 = getDaysInMonth(y1,m1) + d2 - d1;
  }
  

result.style.display = "block";
result.innerHTML = `Your age is
 <span>${y3}</span> years, <span>${m3}</span> months
and
<span>${d3}</span> days`;



}

function getDaysInMonth(year,month){

  return new Date(year,month, 0).getDate();
}

const celsiusEl = document.getElementById("celsius");
const fahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");



function computeTemp(event){

  const currentValue = parseFloat(event.target.value); // Convert input to a number
  //Celsius input box not working correctly might be related to the type conversion in JavaScript. Input values from HTML input fields are treated as strings, so adding 273.32 to the string leads to concatenation instead of numerical addition.

  if (isNaN(currentValue)) {
    // Clear other fields if the input is invalid
    celsiusEl.value = '';
    fahrenheitEl.value = '';
    kelvinEl.value = '';
    return;
  }

 switch (event.target.name) {
  case "celsius":
    
  kelvinEl.value = (currentValue + 273.15).toFixed(2);
  fahrenheitEl.value = (currentValue * 1.8 + 32).toFixed(2);
    break;
 
  case "fahrenheit":

  celsiusEl.value = ((currentValue - 32)/1.8).toFixed(2);
  kelvinEl.value =((currentValue - 32)/1.8 + 273.15).toFixed(2); 
   break;

  case "kelvin":

  celsiusEl.value = (currentValue - 273.15).toFixed(2);
  fahrenheitEl.value = ((currentValue - 273.15) * 1.8 + 32).toFixed(2);
  break;


  default:
    break;
 }



}
const textAreaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainCounterEl = document.getElementById("remaining-counter");
const maxLengthInput = document.getElementById("max-length");
const setLengthBtn = document.getElementById("set-length-btn");



textAreaEl.addEventListener('input',updateCounter);

setLengthBtn.addEventListener('click',()=>{
  const newMaxLength = parseInt(maxLengthInput.value,10);
  if(isNaN(newMaxLength) || newMaxLength <=0){
    alert("please enter a valid positive number.");
  }
textAreaEl.setAttribute('maxlength',newMaxLength);
updateCounter();
});



maxLengthInput.addEventListener('keydown',(event)=>{
  if(event.key === 'Enter'){
    const newMaxLength = parseInt(maxLengthInput.value,10);
  if(isNaN(newMaxLength) || newMaxLength <=0){
    alert("please enter a valid positive number.");
  }
textAreaEl.setAttribute('maxlength',newMaxLength);
updateCounter();
  }
});



function updateCounter(){

  const maxChars = parseInt(textAreaEl.getAttribute('maxlength'), 10);
  const currentLength = textAreaEl.value.length;

            totalCounterEl.innerText = currentLength;
            remainCounterEl.innerText = maxChars - currentLength;

  if(currentLength === maxChars){

    alert(`You have reached the maximum character limit of ${maxChars} characters`);
  }
}

updateCounter();
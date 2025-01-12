const monthName = document.getElementById('month-name');

const dayName = document.getElementById('day-name');

const dayNum = document.getElementById('day-number');

const yearEl = document.getElementById('year');



const date = new Date();

const month = date.getMonth();



monthName.innerText = date.toLocaleString('en',{
  month : 'long'
}); //to convert month to string after fetching it

dayName.innerText = date.toLocaleString('en',{
  weekday : 'long'
});

dayNum.innerText = date.getDate();

yearEl.innerText = date.getFullYear();
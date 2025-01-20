const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuoteBtn = document.querySelector(".new-quote");
const tweetBtn = document.querySelector(".tweet");
const api_url = "https://api.quotable.io/random";




async function getQuote(url) {

  const response = await fetch(url);

  var data  = await response.json();



  quote.innerHTML = data.content;
  author.innerHTML = data.author;

  
}

getQuote(api_url); //calling it to refresh te page with a fresh quote




function tweet(){
  window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "----by "+ author.innerHTML, "Tweet Box","width=600,height=300"); 

  //"_blank will open a new window for twitter"
  //adding "height=300,width=600" will open a small window on the  same page
  //notice the url i have added the inner html at the end to have the quote be tweeted with author name
}


newQuoteBtn.addEventListener("click",()=>getQuote(api_url));//refreshes the quote each time button is clicked

tweetBtn.addEventListener("click",()=>tweet());//open new window and run twitter url



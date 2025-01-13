const btnEl = document.querySelector(".btn");
const closeIcon = document.querySelector(".close-icon");
const trailerContent = document.querySelector(".trailer-container");
const video = document.querySelector("video");
const imageFrame = document.querySelector(".image-front");

btnEl.addEventListener("click",()=>{

  trailerContent.classList.remove("active");

});

imageFrame.addEventListener("click",()=>{

  trailerContent.classList.remove("active");

});



closeIcon.addEventListener("click",()=>{

  trailerContent.classList.add("active");
  video.pause(); //video stops playing when window closes
  video.currentTime = 0; //video always starts from 0 when closed and opened again

});

/*we have given an active class to the trailer part*/

//the trailer is present on the same page itself but we are just hiding it using the active function

//on removing active we remove te style hidden and the video appears 
//to check remove the background coor fro the traier container this will show that all elements are on the same page


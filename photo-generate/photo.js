const containerEl = document.querySelector('.image-container');

const buttonEl = document.querySelector('.btn');


buttonEl.addEventListener('click',()=>{

imageNumber = 4;
 addNewImages();

});



function addNewImages(){
for (let index = 0; index < imageNumber ; index++) {

const newImage = document.createElement("img"); //creating the img element in html

  newImage.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`; //adds this src to img element with random number

  containerEl.appendChild(newImage);


}
  
}
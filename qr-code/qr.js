//this api is used to generate the qr code
//https://goqr.me/api/



let imgBox = document.getElementById("img-box");
let qrImg  = document.getElementById("qr-image");
const qrText = document.getElementById("qr-text");
const Btn = document.querySelector(".btn");


function generateQr(){
  if(qrText.value !== ''){

 qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
  imgBox.classList.add("show-img");
  }
  else {

    qrText.classList.add("error");

    setTimeout(()=>{
            qrText.classList.remove("error");
            },1000);
  }

 
}


Btn.addEventListener("click",()=>{
  
  generateQr();

});
/*const buttonEl = document.getElementById("btn");

const emojiNameEl = document.getElementById("emoji-name");

//now we call an api to load new emojis
const emoji = [];

async function getEmoji(){

  let response = await fetch("https://emoji-api.com/emojis?access_key=cd27e9777f4e99ae7b336b07fde4f2b561d73502");

  //async function waits until it has fetched all the emojis from the website 
  //await word used in async function

  const data = await response.json();

  for(let i=0;i< Math.min(1500, data.length);i++){

    emoji.push({
      emojiName: data[i].character,
      emojiCode: data[i].unicodeName,
    });
  }
}


getEmoji();

buttonEl.addEventListener("click",()=>{


  //get a random no between 0 and 1500
const randomNum  = Math.floor(Math.random()*emoji.length);

buttonEl.innerText = emoji[randomNum].emojiName;


emojiNameEl.innerText = emoji[randomNum].emojiCode;






});*/


const buttonEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");

const emoji = [];

async function getEmoji() {
    buttonEl.innerText = "Loading...";
    buttonEl.disabled = true;

    try {
        let response = await fetch("https://emoji-api.com/emojis?access_key=cd27e9777f4e99ae7b336b07fde4f2b561d73502");
        const data = await response.json();

        for (let i = 0; i < Math.min(1500, data.length); i++) {
            emoji.push({
                emojiName: data[i].character,
                emojiCode: data[i].unicodeName,
            });
        }

        buttonEl.innerText = "Click Me!";
        buttonEl.disabled = false;

    } catch (error) {
        buttonEl.innerText = "Failed to Load Emojis";
        console.error("Error fetching emojis:", error);
    }
}

getEmoji();

buttonEl.addEventListener("click", () => {
    if (emoji.length === 0) return;

    const randomNum = Math.floor(Math.random() * emoji.length);
    buttonEl.innerText = emoji[randomNum].emojiName;
    emojiNameEl.innerText = emoji[randomNum].emojiCode;
});


//the API KEY IS NOT WORKING
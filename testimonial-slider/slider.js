const testimonials = [{

  name:"Martha J",
  photo:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
  text:"I would recommend Apple for anyone trying to get the word out about their business. It has saved me so much time!"

},
{
  name:"Doug Atkinson",
  photo:"https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGhlYWRzaG90fGVufDB8fDB8fHww",
  text:"If you want to take your business to the next level, use Apple and don't look any further."
},
{
  name:"Denton Gibbs",
  photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq2q83JcZgPQfNlAnwAJkBJ-eS9OK7UUzJ5Q&s",
  text:"Apple is a game-changer. Instead of drowning in an endless chain of emails, there is clear and easy accountability meaning tasks actually get done!"
},
{
  name:"Todd Saunders",
  photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8d4F3Lf3kbFIFSGu6BSqqThC9vsueKd7a_w&s",
  text:"Apple has helped my team and I stay on the same page. Previously, we were all over the board. Using Apple has definitely saved us time and money."
},
{
  name:"Scout Pauley",
  photo:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhlYWRzaG90fGVufDB8fDB8fHww",
  text:"I love Apple! This is an amazing service and it has saved me and my small business so much time. I plan to use it for a long time to come."
},
{
  name:"Rhea Binder",
  photo:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
  text:"I have been using Apple for over a year now and I love it! I can't imagine life without it. It's so easy to use, and the customer service is great."
},
{
  name:"Shane Williamson",
  photo:"https://i0.wp.com/www.commercialphotographynorthwestblog.co.uk/wp-content/uploads/2020/10/MDH_8729webqualitysquare.jpg?resize=560%2C560&ssl=1",
  text:"Everyone’s on the same page. Many of our people are not very organized naturally, so Apple is a godsend!"
},
{
  name:"Todd Glover",
  photo:"https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?semt=ais_hybrid",
  text:"If you are a business owner, and you don't have Apple in your toolkit just yet, I highly recommend that you check it out."
}];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");




let index = 0;

updateTestimonials();

function  updateTestimonials(){

  const {name,photo,text} = testimonials[index];

  imgEl.src = photo;
  textEl.innerText = text;
  usernameEl.innerText = name;
  index++;

  if(index === testimonials.length){
    index = 0;
  }
  setTimeout(()=>{

updateTestimonials();
  },2000)
}






const randomNumber = Math.round(Math.random()* 100);
console.log(randomNumber);

document.querySelector(".btn").addEventListener("click", () => {
   const quessNumber = Number(document.querySelector(".input").value); 
   // console.log(quessNumber);
   const bodyBgColor = document.querySelector("container")
   const newH4 = document.querySelector("h4")
   const newImg = document.querySelector("img")

   
   if( randomNumber > quessNumber){
      alert("Up")
      document.querySelector(".input").value =""
   }else if ( randomNumber < quessNumber){
      alert("Down")
      document.querySelector(".input").value =""
   }else {
      alert("Wonderfull")
      newH4.textContent = "You Are Awesome"
      document.querySelector("img").src = "https://t3.ftcdn.net/jpg/01/21/50/96/240_F_121509613_f7hTUdBQfGaRsRNxKFUWjkoRC8pfiwvD.jpg";
      
   }   
      document.querySelector(".input").value =""   
      document.querySelector(".input").focus = ""    
} )




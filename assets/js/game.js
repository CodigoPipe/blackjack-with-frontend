  import {createDeck, drawCard, } from "./card.js"
  import {drawCardBtn, playerPointsHtml, divCardContainer, newGameBtn} from "./dom.js"


  let playerPoints = 0;


createDeck();
drawCardBtn.addEventListener("click", () => {

    const card = drawCard();
    playerPoints += card.value;
    playerPointsHtml.innerText = playerPoints;


    const imgCard = document.createElement("img");
    imgCard.src = `./assets/cartas/${card.name}.png`
    imgCard.classList.add("card");
    divCardContainer.append(imgCard);

    const messages = document.querySelector("#messages");



    if(playerPoints > 21){

        messages.innerText = "You Lost, Try Again..."
        drawCardBtn.disabled = true;

    }else if(playerPoints >= 18 && playerPoints <=21){

        messages.innerText = "Victory, Congratulations!!!"
        drawCardBtn.disabled = true;
    }

})

newGameBtn.addEventListener("click" , ()=>{

    console.clear();
    playerPoints = 0;
    messages.innerText = "Draw a card";
    createDeck();

    drawCardBtn.disabled = false;
    playerPointsHtml.innerText = 0;
    divCardContainer.innerText = " ";
})



//   createDeck();
//   drawCard();
//   console.log(cardValue(cartica));
  

//events

 

//   createDeck();
//   drawCard();
// //   drawCard();
// //   drawCard();
// //   drawCard();

// console.log("sapo");


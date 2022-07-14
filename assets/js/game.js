  import {createDeck, drawCard, cardValue} from "./card.js"
  import {drawCardBtn, playerPointsHtml, divCardContainer} from "./dom.js"


  let playerPoints = 0;


createDeck();
drawCardBtn.addEventListener("click", () => {

    const card = drawCard();
    playerPoints += cardValue(card);
    playerPointsHtml.innerText = playerPoints;


    const imgCard = document.createElement("img");
    imgCard.src = `./assets/cartas/${card.name}.png`
    imgCard.classList.add("card");
    divCardContainer.append(imgCard);

    if(playerPoints > 21){

        console.warn("lost")
        drawCardBtn.disabled = true;

    }else if(playerPoints >= 18 && playerPoints <=21){
        console.warn("you win");
        drawCardBtn.disabled = true;
    }

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


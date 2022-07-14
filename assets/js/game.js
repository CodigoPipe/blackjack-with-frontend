  import {createDeck, drawCard, cardValue} from "./card.js"
  import {drawCardBtn, playerPointsHtml} from "./dom.js"

  let playerPoints = 0;

drawCardBtn.innerText = "pero que pasa putas"

createDeck();
drawCardBtn.addEventListener("click", () => {

    const card = drawCard();
    playerPoints += cardValue(card);
    playerPointsHtml.innerText = playerPoints;
    console.log(card)
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


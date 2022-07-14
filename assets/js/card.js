

class card {
    constructor(name, value,value2) {
      (this.name = name), 
      (this.value = value),
      //this value will be only for aces
      this.value2 = 1;
    }
  }
  
//instantiate each of the four suits of the English deck with their respective 12 cards
const D2 = new card("2♦", 2);
const D3 = new card("3♦", 3);
const D4 = new card("4♦", 4);
const D5 = new card("5♦", 5);
const D6 = new card("6♦", 6);
const D7 = new card("7♦", 7);
const D8 = new card("8♦", 8);
const D9 = new card("9♦", 9);
const D10 = new card("10♦", 10);
const JD = new card("J♦", 10);
const QD = new card("Q♦", 10);
const KD = new card("K♦", 10);
const AD = new card("A♦", 11,);

const C2 = new card("2♣", 2);
const C3 = new card("3♣", 3);
const C4 = new card("4♣", 4);
const C5 = new card("5♣", 5);
const C6 = new card("6♣", 6);
const C7 = new card("7♣", 7);
const C8 = new card("8♣", 8);
const C9 = new card("9♣", 9);
const C10 = new card("10♣", 10);
const JC = new card("J♣", 10);
const QC = new card("Q♣", 10);
const KC = new card("K♣", 10);
const AC = new card("A♣", 11);

const H2 = new card("2♥", 2);
const H3 = new card("3♥", 3);
const H4 = new card("4♥", 4);
const H5 = new card("5♥", 5);
const H6 = new card("6♥", 6);
const H7 = new card("7♥", 7);
const H8 = new card("8♥", 8);
const H9 = new card("9♥", 9);
const H10 = new card("10♥", 10);
const JH = new card("J♥", 10);
const QH = new card("Q♥", 10);
const KH = new card("K♥", 10);
const AH = new card("A♥", 11);

const S2 = new card("2♠", 2);
const S3 = new card("3♠", 3);
const S4 = new card("4♠", 4);
const S5 = new card("5♠", 5);
const S6 = new card("6♠", 6);
const S7 = new card("7♠", 7);
const S8 = new card("8♠", 8);
const S9 = new card("9♠", 9);
const S10 = new card("10♠", 10);
const JS = new card("J♠", 10);
const QS = new card("Q♠", 10);
const KS = new card("K♠", 10);
const AS = new card("A♠", 11);


let deck = [];

//creates a new deck sorted randomly
export function createDeck(){

    deck = [D2,D3,D4,D5,D6,D7,D8,D9,D10,JD,QD,KD,AD,C2,C3,C4,C5,C6,C7,C8,C9,C10,JC,QC,KC,AC,
                S2,S3,S4,S5,S6,S7,S8,S9,S10,JS,QS,KS,AS,H2,H3,H4,H5,H6,H7,H8,H9,H10,JH,QH,KH,AH];

    deck.sort(()=> Math.random() - 0.5);
    
    console.log(deck)
    return deck;            

    }

//draw a random card from the deck and eliminates the card from the deck
export function drawCard(){

  const cardDrawed = deck.pop();

  console.log(deck);
  console.log(cardDrawed);
  return cardDrawed;

}

//returns numeric value of the card
export function cardValue(cardDrawed){
    if(cardDrawed.name.charAt[0] == "A"){
      return cardDrawed.value2
    }
    return cardDrawed.value
}
'use strict';

let faceCardValues = {
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
}

let sortCards = (a, b) => {
  let cardValueA = getCardValue(a)
  let cardValueB = getCardValue(b);

  if (cardValueA === cardValueB) {
    return 0
  }

  if (cardValueA > cardValueB) {
    return 1
  }

  return -1
};

function getCardValue(card) {
  let cardValue = card.slice(0, card.length - 1)
  return faceCardValues[cardValue] ?? parseInt(cardValue)
}



function evaluateHand(hand){
const sortedCards = hand.sort(sortCards)

sortedCards.slice(0, 4).map((card, index) => {
  if (getCardValue(card) === getCardValue(sortedCards[index + 1])) {
    return {
      handType: "pair",
      handValue: 1000 + getCardValue(card),
      highCards: []
    }
  }
})
  return {
    handType: "high card",
    handValue: 0,
    highCards: sortedCards
  }
}

function answer(player1Hand, player2Hand) {
  let player1Cards = player1Hand.split(' ');
  let player1Evaluated = evaluateHand(player1Cards)
  let player2Cards = player2Hand.split(' ');
  let player2Evaluated = evaluateHand(player2Cards)
  let hasPair = false;
  let player2HasPair = false;
  
  
  const sortedPlayer2Cards = player2Cards.sort(sortCards)

  

  sortedPlayer2Cards.slice(0, 4).map((card, index) => {
    if (getCardValue(card) === getCardValue(sortedPlayer2Cards[index + 1])) {
      player2HasPair = true;
    }
  })

     
  if (hasPair) {
    return 'Player 1 wins - pair';
  }
  if (player2HasPair) {
    return 'Player 2 wins - pair';
  }

  if (getCardValue(sortedPlayer1Cards[4]) > getCardValue(sortedPlayer2Cards[4])) {
    return `Player 1 wins - high card: ${sortedPlayer1Cards[4].slice(0, sortedPlayer1Cards[4].length - 1)}`;
  } else {
    return `Player 2 wins - high card: ${sortedPlayer2Cards[4].slice(0, sortedPlayer2Cards[4].length - 1)}`;
  }
}


module.exports = answer;
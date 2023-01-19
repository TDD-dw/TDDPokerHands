"use strict";

let faceCardValues = {
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
};

// LOOK INTO SORTING REVERSE???
let sortCards = (a, b) => {
  let cardValueA = getCardValue(a);
  let cardValueB = getCardValue(b);

  if (cardValueA === cardValueB) {
    return 0;
  }

  if (cardValueA > cardValueB) {
    return 1;
  }

  return -1;
};

function getCardValue(card) {
  let cardValue = card.slice(0, card.length - 1);
  return faceCardValues[cardValue] ?? parseInt(cardValue);
}

function evaluateHand(hand) {
  const sortedCards = hand.sort(sortCards);

  for (let i = 0; i < sortedCards.length - 1; i++) {
    if (getCardValue(sortedCards[i]) === getCardValue(sortedCards[i + 1])) {
      return {
        handType: "pair",
        handValue: 1000 + getCardValue(sortedCards[i]),
        highCards: [sortedCards[i + 2]],
      };
    }
  }

  return {
    handType: "high card",
    handValue: 0,
    highCards: sortedCards,
  };
}

function getCardValueString(card) {
  return card.slice(0, card.length - 1);
}

function answer(player1Hand, player2Hand) {
  let player1Cards = player1Hand.split(" ");
  let player1Evaluated = evaluateHand(player1Cards);
  let player2Cards = player2Hand.split(" ");
  let player2Evaluated = evaluateHand(player2Cards);

  if (player1Evaluated.handValue > player2Evaluated.handValue) {
    return "Player 1 wins - " + player1Evaluated.handType;
  } else if (player2Evaluated.handValue > player1Evaluated.handValue) {
    return "Player 2 wins - " + player2Evaluated.handType;
  } else {
    let p1HighCard = player1Evaluated.highCards[0];
    let p2HighCard = player2Evaluated.highCards[0];
    if (getCardValue(p1HighCard) > getCardValue(p2HighCard)) {
      return `Player 1 wins - high card: ${getCardValueString(p1HighCard)}`;
    } else {
      return `Player 2 wins - high card: ${getCardValueString(p2HighCard)}`;
    }
  }
}

module.exports = answer;

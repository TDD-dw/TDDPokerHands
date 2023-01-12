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

function getCardValue(card){
  let cardValue = card.slice(0, card.length - 1)
  return faceCardValues[cardValue] ?? parseInt(cardValue)
}

function answer(blackHand, whiteHand) {
  let blackCards = blackHand.split(' ');
  let whiteCards = whiteHand.split(' ');

  

  const sortedBlackCards = blackCards.sort(sortCards)
  const sortedWhiteCards = whiteCards.sort(sortCards)

  // sortedBlackCards.map( x => {if (getCardValue(x) === getCardValue(x+1)){}})  check for pair


  if (getCardValue(sortedBlackCards[4]) > getCardValue(sortedWhiteCards[4])) {
    return  `Black wins - high card: ${sortedBlackCards[4].slice(0, sortedBlackCards[4].length - 1)}`;
  } else {
    return  `White wins - high card: ${sortedWhiteCards[4].slice(0, sortedWhiteCards[4].length - 1)}`;
  }
}


module.exports = answer;
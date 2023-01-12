'use strict';

function rankingHands(handA, handB) {
  let black = handA.split(' ');
  let white = handB.split(' ');

  if (white.includes('AH')) {
    return 'White wins - high card: Ace';
  } else {
    return 'Black wins - high card: King';
  }
}
function sortHand(hand) {

  hand.sort((leftCard, rightCard) => {
    const leftValue = getCardValue(leftCard)
    const rightValue = getCardValue(rightCard)
    if (leftValue > rightValue) {
      return -1
    } else if (leftValue < rightValue) {
      return 1
    } else {
      return 0
    }
  });
  return hand;
}

function getCardValue(card) {
  const trimmedCard = card.slice(0, -1)
  const cardValues = {
    'A': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'J': 11,
    'Q': 12,
    'K': 13
  }

  return cardValues[trimmedCard];
}
// function getHighestCard(hand)

module.exports = { rankingHands, sortHand, getCardValue };

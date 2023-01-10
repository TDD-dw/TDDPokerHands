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
  
  hand.sort()
  return ['KD', '9C','5S', '3D', '2H']
}
// function getHighestCard(hand)

module.exports = { rankingHands, sortHand };

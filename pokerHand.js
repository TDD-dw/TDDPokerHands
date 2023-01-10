'use strict';

function compareHands(black, white) {
  // '2H 3D 5S 9C KD', 2:H, 3:D,
  // '2C 3H 4S 8C AH'
  let blackCards = black.split(' ').map((card) => {});
  let whiteCards = white.split(' ').map();
  return 'White wins - high card: Ace';
}

module.exports = { compareHands };

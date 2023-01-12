'use strict';

function compareHands(black, white) {
  // '2H 3D 5S 9C KD',
  // '2C 3H 4S 8C AH'

  // read the hands
  // sort hand
  // getting highest value for each hand
  // comparing the values
  // output winner

  return 'White wins - high card: Ace';
}

function readHand(hand) {
  let readHand = hand.split(' ').map((newCard) => {
    {
      newCard[0] = newCard[1];
    }
  });
}

module.exports = { compareHands };

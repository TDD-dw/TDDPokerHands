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

   let handValues = hand.split(' ')
   let handValueObjects = handValues.map( newCard => {
     const cardObject = {
       [newCard[0]] : newCard[1]
     }
     return cardObject
   })
  return handValueObjects

}
// TODO create method change A,J,Q,K to respective number value
function sortHand(hands) {
    const sortedHandValues = hands.sort((a,b) => (a.num > b.num ? 1:-1))
    return sortedHandValues
}

module.exports = { compareHands, readHand, sortHand };

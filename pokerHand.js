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

function sortHand(hands) {
    // sort the hand dictionary by key
   const handValues =  hands.flatMap(hand => Object.keys(hand))
   const sortedHandValues = handValues.sort()
    return sortedHandValues
}

module.exports = { compareHands, readHand, sortHand };

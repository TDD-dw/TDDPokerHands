'use strict';

const{compareHands} = require('./pokerHand.js');

describe('answer', () => {
  it('High Card; White Wins', () => {
    expect(compareHands('2H 3D 5S 9C KD', '2C 3H 4S 8C AH')).toMatch('White wins - high card: Ace');
  });


  //   Black: 2H 3D 5S 9C KD White: 2C 3H 4S 8C AH
  //   White wins - high card: Ace
});

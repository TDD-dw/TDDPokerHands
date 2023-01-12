'use strict';

const{compareHands} = require('./pokerHand.js');

describe('answer', () => {
  it('High Card; White Wins', () => {
    const datasetOne = {
      inputData: [
        '2H 3D 5S 9C KD', 
        '2C 3H 4S 8C AH'
      ],
      expectedOutput: 'White wins - high card: Ace'
    }
    expect(compareHands(datasetOne.inputData))
    .toMatch(datasetOne.expectedOutput);
  });

  it('High Card; Black Wins', () => {
    const datasetOne = {
      inputData: [
        '2C 3H 4S 8C AH',
        '2H 3D 5S 9C KD'
      ],
      expectedOutput: 'Black wins - high card: Ace'
    }
    expect(compareHands(datasetOne.inputData))
    .toMatch(datasetOne.expectedOutput)
  })


  //   Black: 2H 3D 5S 9C KD White: 2C 3H 4S 8C AH
  //   White wins - high card: Ace
});

'use strict';

const{compareHands, readHand, convertFaceCards, sortHand} = require('./pokerHand.js');

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

//  it('High Card; Black Wins', () => {
//    const datasetOne = {
//      inputData: [
//        '2C 3H 4S 8C AH',
//        '2H 3D 5S 9C KD'
//      ],
//      expectedOutput: 'Black wins - high card: Ace'
//    }
//    expect(compareHands(datasetOne.inputData))
//    .toMatch(datasetOne.expectedOutput)
//  });

  it('returns array of objects representing current hand', () => {
    const inputHand = '2C 3H 4S 8C AH'
    const expectedOutput = [{ num: 2, suite: 'C' }, { num: 3, suite: 'H' }, { num: 4, suite: 'S' }, { num: 8, suite: 'C' }, { num: 'A', suite: 'H' }]

    expect(readHand(inputHand))
    .toEqual(expectedOutput)

  });

  it('returns numerical value associated with face cards and aces', () =>{
    const inputHandUnconverted = [{num:4, suite:'S'},{num:8, suite:'C'},{num:3, suite :'H'},{num:2, suite:'C'},{num : 'A', suite:'H'}]
    const expectedHandConverted = [{num:4, suite:'S'},{num:8, suite:'C'},{num:3, suite :'H'},{num:2, suite:'C'},{num :14, suite:'H'}]

    expect(convertFaceCards(inputHandUnconverted)).toEqual(expectedHandConverted)
  });

    it('sorts array by value', () =>{
        const inputHandUnsorted = [{num:4, suite:'S'},{num:8, suite:'C'},{num:3, suite :'H'},{num:2, suite:'C'},{num :14, suite:'H'}]
        const expectedHandSorted = [{num:2, suite:'C'},{num:3, suite:'H'},{num:4, suite:'S'},{num:8, suite:'C'},{num:14, suite:'H'}]

        expect(sortHand(inputHandUnsorted))
        .toEqual(expectedHandSorted)
    })

  //   Black: 2H 3D 5S 9C KD White: 2C 3H 4S 8C AH
  //   White wins - high card: Ace
});

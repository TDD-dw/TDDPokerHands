'use strict';

const { rankingHands, sortHand } = require('./pokerHand');

describe('rankingHands', () => {
  it('hand with ace wins', () => {
    const handA = '2H 3D 5S 9C KD'
    const handB = '2C 3H 4S 8C AH'
    expect(rankingHands(handA, handB)).toEqual('White wins - high card: Ace');
  });
  it('hand with king wins', () => {
    const handA = '2H 3D 5S 9C KD'
    const handB = '2C 3H 4S 8C QH'
    expect(rankingHands(handA, handB)).toEqual('Black wins - high card: King');
  });
});

describe('sortHand', () => {
  it('sorts highest to lowest', () => {
    const handA = ['2H', '3D', '5S', '9C', 'KD']
    expect(sortHand(handA)).toEqual(['KD', '9C','5S', '3D', '2H'])
  })
  it('sorts highest to lowest', () => {
    const handA = ['7H', '3D', '5S', '9C', 'KD']
    expect(sortHand(handA)).toEqual(['KD', '9C', '7H','5S', '3D'])
  })
})

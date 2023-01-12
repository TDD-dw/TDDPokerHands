'use strict';

const { rankingHands, sortHand, getCardValue } = require('./pokerHand');

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
    expect(sortHand(handA)).toEqual(['KD', '9C', '5S', '3D', '2H'])
  })

  it('sorts highest to lowest', () => {
    const handA = ['7H', '3D', '5S', '9C', 'KD']
    expect(sortHand(handA)).toEqual(['KD', '9C', '7H', '5S', '3D'])
  })

})

describe('getCardValue', () => {
  it('returns the numeric value of the card King', () => {
    const card = 'KD';
    // A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K
    // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13
    expect(getCardValue(card)).toEqual(13);
  });
  it('returns the numeric value of the card Queen', () => {
    const card = 'QD';
    expect(getCardValue(card)).toEqual(12);
  });
  it('returns the numeric value of the card Jack', () => {
    const card = 'JD';
    expect(getCardValue(card)).toEqual(11);
  });
  it('returns the numeric value of the card Ace', () => {
    const card = 'AD';
    expect(getCardValue(card)).toEqual(1);
  });
  it('returns the numeric value of the numeric cards', () => {
    const cards = ['10D', '9D', '8D', '7D', '6D', '5D', '4D', '3D', '2D'];
    expect(cards.map((card) => getCardValue(card))).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2]);
  });

})

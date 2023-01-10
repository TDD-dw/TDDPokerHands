'use strict';

const answer = require('./pokerHand');

describe('poker hands', () => {
  it('high card should win', () => {
    expect(answer('2H 3D 5S 9C 9D', '2C 3H 4S 8C 7H')).toEqual('Black wins - high card: 9');
  });

  it('face card beats number', () => {
    expect(answer('2H 3D 5S 9C 10D', '2C 3H KS 8C 9H')).toEqual('White wins - high card: K');
  })
  it('handle high card of 10', () => {
    expect(answer('2H 3D 5S 9C 10D', '2C 3H 5S 8C 9H')).toEqual('Black wins - high card: 10');
  })

  // todo: handle 10, J, Q, K, A
});
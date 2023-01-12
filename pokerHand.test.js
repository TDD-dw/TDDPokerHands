'use strict';

const answer = require('./pokerHand');

describe('poker hands', () => {
  describe('high cards', () => {
    it('high card should win', () => {
      expect(answer('2H 3D 5S 9C 9D', '2C 3H 4S 8C 7H')).toEqual('Black wins - high card: 9');
    });

    it('face card beats number', () => {
      expect(answer('2H 3D 5S 9C 10D', '2C 3H KS 8C 9H')).toEqual('White wins - high card: K');
      expect(answer('2H 3D 5S 9C 10D', '2C 3H QS 8C 9H')).toEqual('White wins - high card: Q');
      expect(answer('2H 3D 5S 9C 10D', '2C 3H JS 8C 9H')).toEqual('White wins - high card: J');
      expect(answer('2H 3D 5S 9C 10D', '2C 3H AS 8C 9H')).toEqual('White wins - high card: A');
    })

    it('handle high card of 10', () => {
      expect(answer('2H 3D 5S 9C 10D', '2C 3H 5S 8C 9H')).toEqual('Black wins - high card: 10');
    })

    it('king beats queen', () => {
      expect(answer('2H 3D KS 9C 10D', '2C 3H QS 8C 9H')).toEqual('Black wins - high card: K');
    })

    it('queen beats jack', () => {
      expect(answer('2H 3D JS 9C 10D', '2C 3H QS 8C 9H')).toEqual('White wins - high card: Q');
    })

    it('ace beats king', () => {
      expect(answer('2H 3D AS 9C 10D', '2C 3H KS 8C 9H')).toEqual('Black wins - high card: A');
    })
  })

  describe('pairs', () => {
    it('any pair beats any high card', () => {
      expect(answer('2H 2D AS 9C 10D', '2C 3H KS 8C 9H')).toEqual('Black wins - pair');
    })
  })

  it.todo('error cases')
  it.todo('tie cases')

});
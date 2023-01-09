'use strict';

const answer = require('./pokerHand');

describe('answer', () => {
  it('to life the universe and everything', () => {
    expect(answer()).toEqual(42);
  });
});
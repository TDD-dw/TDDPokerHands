"use strict";

const answer = require("./pokerHand");

describe("poker hands", () => {
  describe("high cards", () => {
    it("high card should win", () => {
      expect(answer("2H 3D 5S 9C 7D", "2C 3H 4S 8C 7H")).toEqual(
        "Player 1 wins - high card: 9"
      );
    });

    it("face card beats number", () => {
      expect(answer("2H 3D 5S 9C 10D", "2C 3H KS 8C 9H")).toEqual(
        "Player 2 wins - high card: K"
      );
      expect(answer("2H 3D 5S 9C 10D", "2C 3H QS 8C 9H")).toEqual(
        "Player 2 wins - high card: Q"
      );
      expect(answer("2H 3D 5S 9C 10D", "2C 3H JS 8C 9H")).toEqual(
        "Player 2 wins - high card: J"
      );
      expect(answer("2H 3D 5S 9C 10D", "2C 3H AS 8C 9H")).toEqual(
        "Player 2 wins - high card: A"
      );
    });

    it("handle high card of 10", () => {
      expect(answer("2H 3D 5S 9C 10D", "2C 3H 5S 8C 9H")).toEqual(
        "Player 1 wins - high card: 10"
      );
    });

    it("king beats queen", () => {
      expect(answer("2H 3D KS 9C 10D", "2C 3H QS 8C 9H")).toEqual(
        "Player 1 wins - high card: K"
      );
    });

    it("queen beats jack", () => {
      expect(answer("2H 3D JS 9C 10D", "2C 3H QS 8C 9H")).toEqual(
        "Player 2 wins - high card: Q"
      );
    });

    it("ace beats king", () => {
      expect(answer("2H 3D AS 9C 10D", "2C 3H KS 8C 9H")).toEqual(
        "Player 1 wins - high card: A"
      );
    });
  });

  describe("pairs", () => {
    it("any pair beats any high card", () => {
      expect(answer("2H 2D AS 9C 10D", "2C 3H KS 8C 9H")).toEqual(
        "Player 1 wins - pair"
      );
      expect(answer("2C 3H KS 8C 9H", "2H 2D AS 9C 10D")).toEqual(
        "Player 2 wins - pair"
      );
    });

    it("High pair beats low pair", () => {
      expect(answer("8H 8D AS 9C 10D", "2C 2H KS 8C 9H")).toEqual(
        "Player 1 wins - pair"
      );
    });
    it("When pairs are tied then high card wins", () => {
      debugger;
      expect(answer("8H 8D AS 9C 10D", "8C 8H KS 3C 9H")).toEqual(
        "Player 1 wins - pair with high card: A"
      );
    });
  });

  it.todo("error cases");
  it.todo("tie cases");
});

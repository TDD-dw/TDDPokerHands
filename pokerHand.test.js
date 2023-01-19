"use strict";

const {
  rankingHands,
  sortHand,
  getCardValue,
  getCardName,
  findAllPairs,
} = require("./pokerHand");

describe("rankingHands", () => {
  it("hand with ace wins", () => {
    const handA = "2H 3D 5S 9C KD";
    const handB = "2C 3H 4S 8C AH";
    expect(rankingHands(handA, handB)).toEqual("White wins - high card: Ace");
  });
  it("hand with king wins", () => {
    const handA = "2H 3D 5S 9C KD";
    const handB = "2C 3H 4S 8C QH";
    expect(rankingHands(handA, handB)).toEqual("Black wins - high card: King");
  });
  it("two equal hands tie", () => {
    const handA = "2H 3D 5S 9C 10D";
    const handB = "2C 3H 5C 9H 10H";

    expect(rankingHands(handA, handB)).toEqual("Tie");
  });
  it("third highest card wins", () => {
    const handA = "2H 3D 5S 9C 10D";
    const handB = "2C 3H 4C 9H 10H";

    expect(rankingHands(handA, handB)).toEqual("Black wins - high card: 5");
  });
  it("pair beats highcard", () => {
    const pairHand = "2H 2D 5S 6C 4D";
    const highcardHard = "AC 3H 4C 9H 10H";

    expect(rankingHands(pairHand, highcardHard)).toEqual(
      "Black wins - pair: [2]"
    );
  });
  it("pair beats highcard", () => {
    const highcardHard = "AC 3H 4C 9H 10H";
    const pairHand = "3H 3D 5S 6C 4D";

    expect(rankingHands(highcardHard, pairHand)).toEqual(
      "White wins - pair: [3]"
    );
  });
  it("2 hands with same pair: high card wins", () => {
    const blackHighCard = "2H 3D 5S 10C 10D";
    const white = "2C 3H 4C 10H 10C";

    expect(rankingHands(blackHighCard, white)).toEqual(
      "Black wins - high card: 5"
    );
  });
});

describe("Pair", () => {
  it("finds a pair", () => {
    const handA = ["AH", "QH", "3D", "AS", "QC"];
    expect(findAllPairs(handA)).toEqual(["A", "Q"]);
  });
  it("returns empty array of pairs", () => {
    const hand = ["2C", "3H", "4C", "9H", "10H"];

    expect(findAllPairs(hand)).toEqual([]);
  });
});

describe("sortHand", () => {
  it("sorts highest to lowest", () => {
    const handA = ["2H", "3D", "5S", "9C", "KD"];
    expect(sortHand(handA)).toEqual(["KD", "9C", "5S", "3D", "2H"]);
  });

  it("sorts highest to lowest", () => {
    const handA = ["7H", "3D", "5S", "9C", "KD"];
    expect(sortHand(handA)).toEqual(["KD", "9C", "7H", "5S", "3D"]);
  });
});

describe("getCardValue", () => {
  it("returns the numeric value of the card King", () => {
    const card = "KD";
    // A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K
    // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13
    expect(getCardValue(card)).toEqual(13);
  });
  it("returns the numeric value of the card Queen", () => {
    const card = "QD";
    expect(getCardValue(card)).toEqual(12);
  });
  it("returns the numeric value of the card Jack", () => {
    const card = "JD";
    expect(getCardValue(card)).toEqual(11);
  });
  it("returns the numeric value of the card Ace", () => {
    const card = "AH";
    expect(getCardValue(card)).toEqual(14);
  });
  it("returns the numeric value of the numeric cards", () => {
    const cards = ["10D", "9D", "8D", "7D", "6D", "5D", "4D", "3D", "2D"];
    expect(cards.map((card) => getCardValue(card))).toEqual([
      10, 9, 8, 7, 6, 5, 4, 3, 2,
    ]);
  });
});

describe("getCardName", () => {
  it("returns name of the card King", () => {
    const card = "KH";
    expect(getCardName(card)).toEqual("King");
  });
  it("returns name of the card Queen", () => {
    const card = "QH";
    expect(getCardName(card)).toEqual("Queen");
  });
  it("returns name of the card Jack", () => {
    const card = "JH";
    expect(getCardName(card)).toEqual("Jack");
  });
  it("returns name of the card Ace", () => {
    const card = "AH";
    expect(getCardName(card)).toEqual("Ace");
  });
  it("returns number of card 9 ", () => {
    const card = "9H";
    expect(getCardName(card)).toEqual("9");
  });
  it("returns number of card 10", () => {
    const card = "10H";
    expect(getCardName(card)).toEqual("10");
  });
});

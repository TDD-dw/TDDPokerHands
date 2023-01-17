"use strict";

function rankingHands(handA, handB) {
  let black = handA.split(" ");
  let white = handB.split(" ");

  let sortedBlack = sortHand(black);
  let sortedWhite = sortHand(white);

  return highCardRanker(sortedBlack, sortedWhite);
}

function highCardRanker(sortedBlack, sortedWhite) {
  let highCardBlack = getCardValue(sortedBlack[0]);
  let highCardWhite = getCardValue(sortedWhite[0]);

  if (highCardBlack > highCardWhite) {
    return `Black wins - high card: ${getCardName(sortedBlack[0])}`;
  } else if (highCardBlack < highCardWhite) {
    return `White wins - high card: ${getCardName(sortedWhite[0])}`;
  } else {
    if (sortedBlack.length <= 1) {
      return "Tie";
    }

    return highCardRanker(
      sortedBlack.slice(1, sortedBlack.length - 1),
      sortedWhite.slice(1, sortedWhite.length - 1)
    );
  }
}

function sortHand(hand) {
  hand.sort((leftCard, rightCard) => {
    const leftValue = getCardValue(leftCard);
    const rightValue = getCardValue(rightCard);

    return rightValue - leftValue;
  });

  return hand;
}

function getCardValue(card) {
  const trimmedCard = card.slice(0, -1);
  const cardValues = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };

  return cardValues[trimmedCard];
}
// function getHighestCard(hand)

function getCardName(card) {
  const cardKey = card.slice(0, card.length - 1);
  const cardNames = {
    Q: "Queen",
    K: "King",
    A: "Ace",
    J: "Jack",
  };

  return parseInt(cardKey) ? cardKey : cardNames[cardKey];
}

module.exports = { rankingHands, sortHand, getCardValue, getCardName };

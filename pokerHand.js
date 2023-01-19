"use strict";

function rankingHands(handA, handB) {
  let black = handA.split(" ");
  let white = handB.split(" ");

  let sortedBlack = sortHand(black);
  let sortedWhite = sortHand(white);

  // get pairs of each hand after sort
  // if both are empty
  //    do high card ranker
  // else
  //    return the better pair hand
  // better

  const blackPairs = findAllPairs(sortedBlack);
  const whitePairs = findAllPairs(sortedWhite);

  if (blackPairs.length === 0 && whitePairs.length === 0) {
    return highCardRanker(sortedBlack, sortedWhite);
  } else {
    return pairRanker(blackPairs, whitePairs);
  }
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

    // pop card off hand
    return highCardRanker(
      sortedBlack.slice(1, sortedBlack.length - 1),
      sortedWhite.slice(1, sortedWhite.length - 1)
    );
  }
}

function pairRanker(blackPairs, whitePairs) {
  if (blackPairs.length > whitePairs.length) {
    return `Black wins - pair: [${blackPairs}]`
  } else if (blackPairs.length <whitePairs.length) {
    return `White wins - pair: [${whitePairs}]`
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

function findAllPairs(sortedHand) {
  let pairValues = [];

  let frequencies = {};
  for (let card of sortedHand) {
    const cardRank = getCardRank(card);

    if (cardRank in frequencies) {
      frequencies[cardRank] += 1;
    } else {
      frequencies[cardRank] = 1;
    }
  }

  for (const key in frequencies) {
    if (frequencies[key] === 2) {
      pairValues.push(key);
    }
  }

  return pairValues;
}

function getCardValue(card) {
  const trimmedCard = getCardRank(card);
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
  const cardKey = getCardRank(card);
  const cardNames = {
    Q: "Queen",
    K: "King",
    A: "Ace",
    J: "Jack",
  };

  return parseInt(cardKey) ? cardKey : cardNames[cardKey];
}

function getCardRank(card) {
  return card.slice(0, -1);
}

module.exports = {
  rankingHands,
  sortHand,
  getCardValue,
  getCardName,
  findAllPairs,
};

interface BetSize {
  round: number;
  amount: number;
  type: BetType;
}

export enum BetType {
  BET_5_TO_1,
  BET_2_TO_1,
  BET_1_TO_1,
}

export const zoneBaseBet = 5000;
export const numberBaseBet = 1000;

const dozenPaymentFactor = 3;

export const getCumulativeBet = (round: number, type: BetType) => {
  return betSize
    .filter((bet) => (bet.round <= round && bet.type === type))
    .reduce((total, bet) => total + bet.amount, 0);
};

export const getBetProfit = (round: number, type: BetType) => {
  const betAmount = betSize.find((bet) => bet.round === round)?.amount || 0;
  return dozenPaymentFactor * betAmount - getCumulativeBet(round, type);
};

export const getBetAmount = (round: number, type: BetType) =>
  betSize.find((bet) => (bet.type === type && bet.round === round + 1))?.amount;

export const betSize: Array<BetSize> = [
  {
    round: 1,
    amount: zoneBaseBet,
    type: BetType.BET_2_TO_1
  },
  {
    round: 2,
    amount: zoneBaseBet,
    type: BetType.BET_2_TO_1
  },
  {
    round: 3,
    amount: zoneBaseBet,
    type: BetType.BET_2_TO_1
  },
  {
    round: 4,
    amount: zoneBaseBet * 2,
    type: BetType.BET_2_TO_1
  },
  {
    round: 5,
    amount: zoneBaseBet * 3,
    type: BetType.BET_2_TO_1
  },
  {
    round: 6,
    amount: zoneBaseBet * 5,
    type: BetType.BET_2_TO_1
  },
  {
    round: 7,
    amount: zoneBaseBet * 7,
    type: BetType.BET_2_TO_1
  },
  {
    round: 8,
    amount: zoneBaseBet * 11,
    type: BetType.BET_2_TO_1
  },
  {
    round: 9,
    amount: zoneBaseBet * 16,
    type: BetType.BET_2_TO_1
  },
  {
    round: 10,
    amount: zoneBaseBet * 24,
    type: BetType.BET_2_TO_1
  },
  {
    round: 11,
    amount: zoneBaseBet * 36,
    type: BetType.BET_2_TO_1
  },
  {
    round: 12,
    amount: zoneBaseBet * 54,
    type: BetType.BET_2_TO_1
  },
  // 1 to 1
  {
    round: 1,
    amount: zoneBaseBet,
    type: BetType.BET_1_TO_1
  },
  {
    round: 2,
    amount: zoneBaseBet * 2,
    type: BetType.BET_1_TO_1
  },
  {
    round: 3,
    amount: zoneBaseBet * 4,
    type: BetType.BET_1_TO_1
  },
  {
    round: 4,
    amount: zoneBaseBet * 8,
    type: BetType.BET_1_TO_1
  },
  {
    round: 5,
    amount: zoneBaseBet * 16,
    type: BetType.BET_1_TO_1
  },
  {
    round: 6,
    amount: zoneBaseBet * 32,
    type: BetType.BET_1_TO_1
  },
  {
    round: 7,
    amount: zoneBaseBet * 64,
    type: BetType.BET_1_TO_1
  },
  // 5 to 1





















  {
    round: 1,
    amount: numberBaseBet * 1,
    type: BetType.BET_5_TO_1
  },
  {
    round: 2,
    amount: numberBaseBet * 1,
    type: BetType.BET_5_TO_1
  },
  {
    round: 3,
    amount: numberBaseBet * 1,
    type: BetType.BET_5_TO_1
  },
  {
    round: 4,
    amount: numberBaseBet * 1,
    type: BetType.BET_5_TO_1
  },
  {
    round: 5,
    amount: numberBaseBet * 1,
    type: BetType.BET_5_TO_1
  },
  {
    round: 6,
    amount: numberBaseBet * 1,
    type: BetType.BET_5_TO_1
  },
  {
    round: 7,
    amount: numberBaseBet * 2,
    type: BetType.BET_5_TO_1
  },
  {
    round: 8,
    amount: numberBaseBet * 2,
    type: BetType.BET_5_TO_1
  },
  {
    round: 9,
    amount: numberBaseBet * 2,
    type: BetType.BET_5_TO_1
  },
  {
    round: 10,
    amount: numberBaseBet * 3,
    type: BetType.BET_5_TO_1
  },
  {
    round: 11,
    amount: numberBaseBet * 3,
    type: BetType.BET_5_TO_1
  },
  {
    round: 12,
    amount: numberBaseBet * 4,
    type: BetType.BET_5_TO_1
  },
  {
    round: 13,
    amount: numberBaseBet * 5,
    type: BetType.BET_5_TO_1
  },
  {
    round: 14,
    amount: numberBaseBet * 6,
    type: BetType.BET_5_TO_1
  },
  {
    round: 15,
    amount: numberBaseBet * 7,
    type: BetType.BET_5_TO_1
  },
  {
    round: 16,
    amount: numberBaseBet * 8,
    type: BetType.BET_5_TO_1
  },
  {
    round: 17,
    amount: numberBaseBet * 10,
    type: BetType.BET_5_TO_1
  },
  {
    round: 18,
    amount: numberBaseBet * 12,
    type: BetType.BET_5_TO_1
  },
  {
    round: 19,
    amount: numberBaseBet * 14,
    type: BetType.BET_5_TO_1
  },
  {
    round: 20,
    amount: numberBaseBet * 17,
    type: BetType.BET_5_TO_1
  },
  {
    round: 21,
    amount: numberBaseBet * 21,
    type: BetType.BET_5_TO_1
  },
  {
    round: 22,
    amount: numberBaseBet * 25,
    type: BetType.BET_5_TO_1
  },
  {
    round: 23,
    amount: numberBaseBet * 30,
    type: BetType.BET_5_TO_1
  },
  {
    round: 24,
    amount: numberBaseBet * 36,
    type: BetType.BET_5_TO_1
  },
  {
    round: 25,
    amount: numberBaseBet * 43,
    type: BetType.BET_5_TO_1
  },
  {
    round: 26,
    amount: numberBaseBet * 52,
    type: BetType.BET_5_TO_1
  },
  {
    round: 27,
    amount: numberBaseBet * 62,
    type: BetType.BET_5_TO_1
  },
  {
    round: 28,
    amount: numberBaseBet * 74,
    type: BetType.BET_5_TO_1
  },
];

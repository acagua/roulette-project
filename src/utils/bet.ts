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

export const baseBet = 5000;
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
    amount: baseBet,
    type: BetType.BET_2_TO_1
  },
  {
    round: 2,
    amount: baseBet,
    type: BetType.BET_2_TO_1
  },
  {
    round: 3,
    amount: baseBet,
    type: BetType.BET_2_TO_1
  },
  {
    round: 4,
    amount: baseBet * 2,
    type: BetType.BET_2_TO_1
  },
  {
    round: 5,
    amount: baseBet * 3,
    type: BetType.BET_2_TO_1
  },
  {
    round: 6,
    amount: baseBet * 5,
    type: BetType.BET_2_TO_1
  },
  {
    round: 7,
    amount: baseBet * 7,
    type: BetType.BET_2_TO_1
  },
  {
    round: 8,
    amount: baseBet * 11,
    type: BetType.BET_2_TO_1
  },
  {
    round: 9,
    amount: baseBet * 16,
    type: BetType.BET_2_TO_1
  },
  {
    round: 10,
    amount: baseBet * 24,
    type: BetType.BET_2_TO_1
  },
  {
    round: 11,
    amount: baseBet * 36,
    type: BetType.BET_2_TO_1
  },
  {
    round: 12,
    amount: baseBet * 54,
    type: BetType.BET_2_TO_1
  },
  //1 to 1
  {
    round: 1,
    amount: baseBet,
    type: BetType.BET_1_TO_1
  },
  {
    round: 2,
    amount: baseBet * 2,
    type: BetType.BET_1_TO_1
  },
  {
    round: 3,
    amount: baseBet * 4,
    type: BetType.BET_1_TO_1
  },
  {
    round: 4,
    amount: baseBet * 8,
    type: BetType.BET_1_TO_1
  },
  {
    round: 5,
    amount: baseBet * 16,
    type: BetType.BET_1_TO_1
  },
  {
    round: 6,
    amount: baseBet * 32,
    type: BetType.BET_1_TO_1
  },
  {
    round: 7,
    amount: baseBet * 64,
    type: BetType.BET_1_TO_1
  },
];

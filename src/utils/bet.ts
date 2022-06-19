interface betSize {
  round: number;
  amount: number;
}

export const baseBet = 5000;
const dozenPaymentFactor = 3;

export const getCumulativeBet = (round: number) => {
  return betSize
    .filter((bet) => bet.round <= round)
    .reduce((total, bet) => total + bet.amount, 0);
};

export const getBetProfit = (round: number) => {
  const betAmount = betSize.find((bet) => bet.round === round)?.amount || 0;
  return dozenPaymentFactor * betAmount - getCumulativeBet(round);
};

export const getBetAmount = (round: number) =>
  betSize.find((bet) => bet.round === round + 1)?.amount;

export const betSize: Array<betSize> = [
  {
    round: 1,
    amount: baseBet,
  },
  {
    round: 2,
    amount: baseBet,
  },
  {
    round: 3,
    amount: baseBet,
  },
  {
    round: 4,
    amount: baseBet * 2,
  },
  {
    round: 5,
    amount: baseBet * 3,
  },
  {
    round: 6,
    amount: baseBet * 5,
  },
  {
    round: 7,
    amount: baseBet * 7,
  },
  {
    round: 8,
    amount: baseBet * 11,
  },
  {
    round: 9,
    amount: baseBet * 16,
  },
  {
    round: 10,
    amount: baseBet * 24,
  },
  {
    round: 11,
    amount: baseBet * 36,
  },
  {
    round: 12,
    amount: baseBet * 54,
  },
];

const ROULETTE_NUMBER = 38;
const BET_NUMBERS_RANGE = 12;

export const successOdds = BET_NUMBERS_RANGE / ROULETTE_NUMBER;

export const getCumulativeOdds = (round: number) =>
  1 - (1 - successOdds) ** round;

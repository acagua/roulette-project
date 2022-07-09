interface BetSize {
  round: number;
  multiplier: number;
  type: BetType;
}

export enum BetType {
  BET_5_TO_1,
  BET_2_TO_1,
  BET_1_TO_1,
}

export const betSize: Array<BetSize> = [
  {
    round: 1,
    multiplier: 1,
    type: BetType.BET_2_TO_1,
  },
  {
    round: 2,
    multiplier: 1,
    type: BetType.BET_2_TO_1,
  },
  {
    round: 3,
    multiplier: 1,
    type: BetType.BET_2_TO_1,
  },
  {
    round: 4,
    multiplier: 2,
    type: BetType.BET_2_TO_1,
  },
  {
    round: 5,
    multiplier: 3,
    type: BetType.BET_2_TO_1,
  },
  {
    round: 6,
    multiplier: 5,
    type: BetType.BET_2_TO_1,
  },
  {
    round: 7,
    multiplier: 7,
    type: BetType.BET_2_TO_1,
  },
  {
    round: 8,
    multiplier: 11,
    type: BetType.BET_2_TO_1,
  },
  {
    round: 9,
    multiplier: 16,
    type: BetType.BET_2_TO_1,
  },
  {
    round: 10,
    multiplier: 24,
    type: BetType.BET_2_TO_1,
  },
  {
    round: 11,
    multiplier: 36,
    type: BetType.BET_2_TO_1,
  },
  {
    round: 12,
    multiplier: 54,
    type: BetType.BET_2_TO_1,
  },
  // 1 to 1
  {
    round: 1,
    multiplier: 1,
    type: BetType.BET_1_TO_1,
  },
  {
    round: 2,
    multiplier: 2,
    type: BetType.BET_1_TO_1,
  },
  {
    round: 3,
    multiplier: 4,
    type: BetType.BET_1_TO_1,
  },
  {
    round: 4,
    multiplier: 8,
    type: BetType.BET_1_TO_1,
  },
  {
    round: 5,
    multiplier: 16,
    type: BetType.BET_1_TO_1,
  },
  {
    round: 6,
    multiplier: 32,
    type: BetType.BET_1_TO_1,
  },
  {
    round: 7,
    multiplier: 64,
    type: BetType.BET_1_TO_1,
  },
  // 5 to 1

  {
    round: 1,
    multiplier: 1,
    type: BetType.BET_5_TO_1,
  },
  {
    round: 2,
    multiplier: 1,
    type: BetType.BET_5_TO_1,
  },
  {
    round: 3,
    multiplier: 1,
    type: BetType.BET_5_TO_1,
  },
  {
    round: 4,
    multiplier: 1,
    type: BetType.BET_5_TO_1,
  },
  {
    round: 5,
    multiplier: 1,
    type: BetType.BET_5_TO_1,
  },
  {
    round: 6,
    multiplier: 1,
    type: BetType.BET_5_TO_1,
  },
  {
    round: 7,
    multiplier: 2,
    type: BetType.BET_5_TO_1,
  },
  {
    round: 8,
    multiplier: 2,
    type: BetType.BET_5_TO_1,
  },
  {
    round: 9,
    multiplier: 2,
    type: BetType.BET_5_TO_1,
  },
  {
    round: 10,
    multiplier: 3,
    type: BetType.BET_5_TO_1,
  },
  {
    round: 11,
    multiplier: 3,
    type: BetType.BET_5_TO_1,
  },
  {
    round: 12,
    multiplier: 4,
    type: BetType.BET_5_TO_1,
  },
  {
    round: 13,
    multiplier: 5,
    type: BetType.BET_5_TO_1,
  },
  {
    round: 14,
    multiplier: 6,
    type: BetType.BET_5_TO_1,
  },
  {
    round: 15,
    multiplier: 7,
    type: BetType.BET_5_TO_1,
  },
  {
    round: 16,
    multiplier: 8,
    type: BetType.BET_5_TO_1,
  },
  {
    round: 17,
    multiplier: 10,
    type: BetType.BET_5_TO_1,
  },
  {
    round: 18,
    multiplier: 12,
    type: BetType.BET_5_TO_1,
  },
  {
    round: 19,
    multiplier: 14,
    type: BetType.BET_5_TO_1,
  },
  {
    round: 20,
    multiplier: 17,
    type: BetType.BET_5_TO_1,
  },
  {
    round: 21,
    multiplier: 21,
    type: BetType.BET_5_TO_1,
  },
  {
    round: 22,
    multiplier: 25,
    type: BetType.BET_5_TO_1,
  },
  {
    round: 23,
    multiplier: 30,
    type: BetType.BET_5_TO_1,
  },
  {
    round: 24,
    multiplier: 36,
    type: BetType.BET_5_TO_1,
  },
  {
    round: 25,
    multiplier: 43,
    type: BetType.BET_5_TO_1,
  },
  {
    round: 26,
    multiplier: 52,
    type: BetType.BET_5_TO_1,
  },
  {
    round: 27,
    multiplier: 62,
    type: BetType.BET_5_TO_1,
  },
  {
    round: 28,
    multiplier: 74,
    type: BetType.BET_5_TO_1,
  },
];

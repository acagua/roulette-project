type ResultType = {
  totalProfit: number;
  dozensProfit: number;
  columnsProfit: number;
  oneToOneProfit: number;
  linesProfit: number;
};

export const allBetsStrategy = (sampleArray: Array<string>): ResultType => {
  let results = {
    totalProfit: 0,
    dozensProfit: 0,
    columnsProfit: 0,
    oneToOneProfit: 0,
    linesProfit: 0,
  };
  let zones = initialZones;
  sampleArray.map((number) => {
    const numberInfo = getNumberInfo(number);
    const { column, dozen, evenOdd, lowHigh, redBlack } = numberInfo;
    zones.map((zone) => {
      if (hit(zone, numberInfo)) {
      }
    });
  });
  //   sampleArray.forEach((number) => {});
  return results;
};

const getNumberInfo = (id: string): RouletteNumber =>
  numberList.find((number) => number.number === id) || numberList[1];

const hit = (zone: IZone, number: RouletteNumber) => {
  return (
    (zone.type === ZoneTypes.COLUMN && number.column === zone.id) ||
    (zone.type === ZoneTypes.DOZEN && number.dozen === zone.id) ||
    (zone.type === ZoneTypes.EVEN_ODD && number.evenOdd === zone.id) ||
    (zone.type === ZoneTypes.RED_BLACK && number.redBlack === zone.id) ||
    (zone.type === ZoneTypes.LOW_HIGH && number.lowHigh === zone.id) ||
    (zone.type === ZoneTypes.LINE && number.line.includes(zone.id))
  );
};
//----------------------------------------------------------------
//----------------------------------------------------------------
//---------------------------DELETE-------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------

interface IZone {
  id:
    | DozensEnum
    | ColumnsEnum
    | LowHighEnum
    | EvenOddEnum
    | RedBlackEnum
    | LineEnum
    | number;
  name: string;
  type: ZoneTypes;
  counter: number;
  round: number;
  locked: boolean;
}

enum LowHighEnum {
  ZERO = 0,
  LOW = 1,
  HIGH = 2,
}

enum EvenOddEnum {
  ZERO = 0,
  EVEN = 1,
  ODD = 2,
}

enum RedBlackEnum {
  GREEN = 0,
  RED = 1,
  BLACK = 2,
}

enum DozensEnum {
  ZERO = 0,
  FIRST_DOZEN = 1,
  SECOND_DOZEN = 2,
  THIRD_DOZEN = 3,
}

enum ColumnsEnum {
  ZERO = 0,
  FIRST_COLUMN = 1,
  SECOND_COLUMN = 2,
  THIRD_COLUMN = 3,
}

enum LineEnum {
  TOP_LINE = 1,
  FIRST_LINE = 2,
  SECOND_LINE = 3,
  THIRD_LINE = 4,
  FOURTH_LINE = 5,
  FIFTH_LINE = 6,
  SIXTH_LINE = 7,
  SEVENTH_LINE = 8,
  EIGHTH_LINE = 9,
  NINTH_LINE = 10,
  TENTH_LINE = 11,
  ELEVENTH_LINE = 12,
}

enum ZoneTypes {
  DOZEN = "dozen",
  COLUMN = "column",
  LOW_HIGH = "high-low",
  EVEN_ODD = "even-odd",
  RED_BLACK = "red-black",
  LINE = "line",
}

interface RouletteNumber {
  number: string;
  redBlack: RedBlackEnum;
  evenOdd: EvenOddEnum;
  lowHigh: LowHighEnum;
  column: ColumnsEnum;
  dozen: DozensEnum;
  line: LineEnum[];
}

const initialZones = [
  {
    id: DozensEnum.FIRST_DOZEN,
    name: "D1",
    type: ZoneTypes.DOZEN,
    counter: 0,
    round: 0,
    locked: false,
  },
  {
    id: DozensEnum.SECOND_DOZEN,
    name: "D2",
    type: ZoneTypes.DOZEN,
    counter: 0,
    round: 0,
    locked: false,
  },
  {
    id: DozensEnum.THIRD_DOZEN,
    name: "D3",
    type: ZoneTypes.DOZEN,
    counter: 0,
    round: 0,
    locked: false,
  },
  {
    id: ColumnsEnum.FIRST_COLUMN,
    name: "C1",
    type: ZoneTypes.COLUMN,
    counter: 0,
    round: 0,
    locked: false,
  },
  {
    id: ColumnsEnum.SECOND_COLUMN,
    name: "C2",
    type: ZoneTypes.COLUMN,
    counter: 0,
    round: 0,
    locked: false,
  },
  {
    id: ColumnsEnum.THIRD_COLUMN,
    name: "C3",
    type: ZoneTypes.COLUMN,
    counter: 0,
    round: 0,
    locked: false,
  },
  {
    id: LowHighEnum.LOW,
    name: "Low",
    type: ZoneTypes.LOW_HIGH,
    counter: 0,
    round: 0,
    locked: false,
  },
  {
    id: EvenOddEnum.EVEN,
    name: "Even",
    type: ZoneTypes.EVEN_ODD,
    counter: 0,
    round: 0,
    locked: false,
  },
  {
    id: RedBlackEnum.RED,
    name: "Red",
    type: ZoneTypes.RED_BLACK,
    counter: 0,
    round: 0,
    locked: false,
  },
  {
    id: RedBlackEnum.BLACK,
    name: "Black",
    type: ZoneTypes.RED_BLACK,
    counter: 0,
    round: 0,
    locked: false,
  },
  {
    id: EvenOddEnum.ODD,
    name: "Odd",
    type: ZoneTypes.EVEN_ODD,
    counter: 0,
    round: 0,
    locked: false,
  },
  {
    id: LowHighEnum.HIGH,
    name: "High",
    type: ZoneTypes.LOW_HIGH,
    counter: 0,
    round: 0,
    locked: false,
  },
  {
    id: LineEnum.TOP_LINE,
    name: "",
    type: ZoneTypes.LINE,
    counter: 0,
    round: 0,
    locked: false,
  },
  {
    id: LineEnum.FIRST_LINE,
    name: "",
    type: ZoneTypes.LINE,
    counter: 0,
    round: 0,
    locked: false,
  },
  {
    id: LineEnum.SECOND_LINE,
    name: "",
    type: ZoneTypes.LINE,
    counter: 0,
    round: 0,
    locked: false,
  },
  {
    id: LineEnum.THIRD_LINE,
    name: "",
    type: ZoneTypes.LINE,
    counter: 0,
    round: 0,
    locked: false,
  },
  {
    id: LineEnum.FOURTH_LINE,
    name: "",
    type: ZoneTypes.LINE,
    counter: 0,
    round: 0,
    locked: false,
  },
  {
    id: LineEnum.FIFTH_LINE,
    name: "",
    type: ZoneTypes.LINE,
    counter: 0,
    round: 0,
    locked: false,
  },
  {
    id: LineEnum.SIXTH_LINE,
    name: "",
    type: ZoneTypes.LINE,
    counter: 0,
    round: 0,
    locked: false,
  },
  {
    id: LineEnum.SEVENTH_LINE,
    name: "",
    type: ZoneTypes.LINE,
    counter: 0,
    round: 0,
    locked: false,
  },
  {
    id: LineEnum.EIGHTH_LINE,
    name: "",
    type: ZoneTypes.LINE,
    counter: 0,
    round: 0,
    locked: false,
  },
  {
    id: LineEnum.NINTH_LINE,
    name: "",
    type: ZoneTypes.LINE,
    counter: 0,
    round: 0,
    locked: false,
  },
  {
    id: LineEnum.TENTH_LINE,
    name: "",
    type: ZoneTypes.LINE,
    counter: 0,
    round: 0,
    locked: false,
  },
  {
    id: LineEnum.ELEVENTH_LINE,
    name: "",
    type: ZoneTypes.LINE,
    counter: 0,
    round: 0,
    locked: false,
  },
];

const numberList: RouletteNumber[] = [
  //---------------- Zeros
  {
    number: "0",
    redBlack: RedBlackEnum.GREEN,
    evenOdd: EvenOddEnum.ZERO,
    lowHigh: LowHighEnum.ZERO,
    column: ColumnsEnum.ZERO,
    dozen: DozensEnum.ZERO,
    line: [LineEnum.TOP_LINE],
  },
  {
    number: "00",
    redBlack: RedBlackEnum.GREEN,
    evenOdd: EvenOddEnum.ZERO,
    lowHigh: LowHighEnum.ZERO,
    column: ColumnsEnum.ZERO,
    dozen: DozensEnum.ZERO,
    line: [LineEnum.TOP_LINE],
  },
  //---------------- First Dozen
  {
    number: "1",
    redBlack: RedBlackEnum.RED,
    evenOdd: EvenOddEnum.ODD,
    lowHigh: LowHighEnum.LOW,
    column: ColumnsEnum.FIRST_COLUMN,
    dozen: DozensEnum.FIRST_DOZEN,
    line: [LineEnum.TOP_LINE, LineEnum.FIRST_LINE],
  },
  {
    number: "2",
    redBlack: RedBlackEnum.BLACK,
    evenOdd: EvenOddEnum.EVEN,
    lowHigh: LowHighEnum.LOW,
    column: ColumnsEnum.SECOND_COLUMN,
    dozen: DozensEnum.FIRST_DOZEN,
    line: [LineEnum.TOP_LINE, LineEnum.FIRST_LINE],
  },
  {
    number: "3",
    redBlack: RedBlackEnum.RED,
    evenOdd: EvenOddEnum.ODD,
    lowHigh: LowHighEnum.LOW,
    column: ColumnsEnum.THIRD_COLUMN,
    dozen: DozensEnum.FIRST_DOZEN,
    line: [LineEnum.TOP_LINE, LineEnum.FIRST_LINE],
  },
  {
    number: "4",
    redBlack: RedBlackEnum.BLACK,
    evenOdd: EvenOddEnum.EVEN,
    lowHigh: LowHighEnum.LOW,
    column: ColumnsEnum.FIRST_COLUMN,
    dozen: DozensEnum.FIRST_DOZEN,
    line: [LineEnum.FIRST_LINE, LineEnum.SECOND_LINE],
  },
  {
    number: "5",
    redBlack: RedBlackEnum.RED,
    evenOdd: EvenOddEnum.ODD,
    lowHigh: LowHighEnum.LOW,
    column: ColumnsEnum.SECOND_COLUMN,
    dozen: DozensEnum.FIRST_DOZEN,
    line: [LineEnum.FIRST_LINE, LineEnum.SECOND_LINE],
  },
  {
    number: "6",
    redBlack: RedBlackEnum.BLACK,
    evenOdd: EvenOddEnum.EVEN,
    lowHigh: LowHighEnum.LOW,
    column: ColumnsEnum.THIRD_COLUMN,
    dozen: DozensEnum.FIRST_DOZEN,
    line: [LineEnum.FIRST_LINE, LineEnum.SECOND_LINE],
  },
  {
    number: "7",
    redBlack: RedBlackEnum.RED,
    evenOdd: EvenOddEnum.ODD,
    lowHigh: LowHighEnum.LOW,
    column: ColumnsEnum.FIRST_COLUMN,
    dozen: DozensEnum.FIRST_DOZEN,
    line: [LineEnum.SECOND_LINE, LineEnum.THIRD_LINE],
  },
  {
    number: "8",
    redBlack: RedBlackEnum.BLACK,
    evenOdd: EvenOddEnum.EVEN,
    lowHigh: LowHighEnum.LOW,
    column: ColumnsEnum.SECOND_COLUMN,
    dozen: DozensEnum.FIRST_DOZEN,
    line: [LineEnum.SECOND_LINE, LineEnum.THIRD_LINE],
  },
  {
    number: "9",
    redBlack: RedBlackEnum.RED,
    evenOdd: EvenOddEnum.ODD,
    lowHigh: LowHighEnum.LOW,
    column: ColumnsEnum.THIRD_COLUMN,
    dozen: DozensEnum.FIRST_DOZEN,
    line: [LineEnum.SECOND_LINE, LineEnum.THIRD_LINE],
  },
  {
    number: "10",
    redBlack: RedBlackEnum.BLACK,
    evenOdd: EvenOddEnum.EVEN,
    lowHigh: LowHighEnum.LOW,
    column: ColumnsEnum.FIRST_COLUMN,
    dozen: DozensEnum.FIRST_DOZEN,
    line: [LineEnum.THIRD_LINE, LineEnum.FOURTH_LINE],
  },
  {
    number: "11",
    redBlack: RedBlackEnum.BLACK,
    evenOdd: EvenOddEnum.ODD,
    lowHigh: LowHighEnum.LOW,
    column: ColumnsEnum.SECOND_COLUMN,
    dozen: DozensEnum.FIRST_DOZEN,
    line: [LineEnum.THIRD_LINE, LineEnum.FOURTH_LINE],
  },
  {
    number: "12",
    redBlack: RedBlackEnum.RED,
    evenOdd: EvenOddEnum.EVEN,
    lowHigh: LowHighEnum.LOW,
    column: ColumnsEnum.THIRD_COLUMN,
    dozen: DozensEnum.FIRST_DOZEN,
    line: [LineEnum.THIRD_LINE, LineEnum.FOURTH_LINE],
  },
  //---------------- Second Dozen
  {
    number: "13",
    redBlack: RedBlackEnum.BLACK,
    evenOdd: EvenOddEnum.ODD,
    lowHigh: LowHighEnum.LOW,
    column: ColumnsEnum.FIRST_COLUMN,
    dozen: DozensEnum.SECOND_DOZEN,
    line: [LineEnum.FOURTH_LINE, LineEnum.FIFTH_LINE],
  },
  {
    number: "14",
    redBlack: RedBlackEnum.RED,
    evenOdd: EvenOddEnum.EVEN,
    lowHigh: LowHighEnum.LOW,
    column: ColumnsEnum.SECOND_COLUMN,
    dozen: DozensEnum.SECOND_DOZEN,
    line: [LineEnum.FOURTH_LINE, LineEnum.FIFTH_LINE],
  },
  {
    number: "15",
    redBlack: RedBlackEnum.BLACK,
    evenOdd: EvenOddEnum.ODD,
    lowHigh: LowHighEnum.LOW,
    column: ColumnsEnum.THIRD_COLUMN,
    dozen: DozensEnum.SECOND_DOZEN,
    line: [LineEnum.FOURTH_LINE, LineEnum.FIFTH_LINE],
  },
  {
    number: "16",
    redBlack: RedBlackEnum.RED,
    evenOdd: EvenOddEnum.EVEN,
    lowHigh: LowHighEnum.LOW,
    column: ColumnsEnum.FIRST_COLUMN,
    dozen: DozensEnum.SECOND_DOZEN,
    line: [LineEnum.FIFTH_LINE, LineEnum.SIXTH_LINE],
  },
  {
    number: "17",
    redBlack: RedBlackEnum.BLACK,
    evenOdd: EvenOddEnum.ODD,
    lowHigh: LowHighEnum.LOW,
    column: ColumnsEnum.SECOND_COLUMN,
    dozen: DozensEnum.SECOND_DOZEN,
    line: [LineEnum.FIFTH_LINE, LineEnum.SIXTH_LINE],
  },
  {
    number: "18",
    redBlack: RedBlackEnum.RED,
    evenOdd: EvenOddEnum.EVEN,
    lowHigh: LowHighEnum.LOW,
    column: ColumnsEnum.THIRD_COLUMN,
    dozen: DozensEnum.SECOND_DOZEN,
    line: [LineEnum.FIFTH_LINE, LineEnum.SIXTH_LINE],
  },
  //---------------- Mid Board
  {
    number: "19",
    redBlack: RedBlackEnum.RED,
    evenOdd: EvenOddEnum.ODD,
    lowHigh: LowHighEnum.HIGH,
    column: ColumnsEnum.FIRST_COLUMN,
    dozen: DozensEnum.SECOND_DOZEN,
    line: [LineEnum.SIXTH_LINE, LineEnum.SEVENTH_LINE],
  },
  {
    number: "20",
    redBlack: RedBlackEnum.BLACK,
    evenOdd: EvenOddEnum.EVEN,
    lowHigh: LowHighEnum.HIGH,
    column: ColumnsEnum.SECOND_COLUMN,
    dozen: DozensEnum.SECOND_DOZEN,
    line: [LineEnum.SIXTH_LINE, LineEnum.SEVENTH_LINE],
  },
  {
    number: "21",
    redBlack: RedBlackEnum.RED,
    evenOdd: EvenOddEnum.ODD,
    lowHigh: LowHighEnum.HIGH,
    column: ColumnsEnum.THIRD_COLUMN,
    dozen: DozensEnum.SECOND_DOZEN,
    line: [LineEnum.SIXTH_LINE, LineEnum.SEVENTH_LINE],
  },
  {
    number: "22",
    redBlack: RedBlackEnum.BLACK,
    evenOdd: EvenOddEnum.EVEN,
    lowHigh: LowHighEnum.HIGH,
    column: ColumnsEnum.FIRST_COLUMN,
    dozen: DozensEnum.SECOND_DOZEN,
    line: [LineEnum.SEVENTH_LINE, LineEnum.EIGHTH_LINE],
  },
  {
    number: "23",
    redBlack: RedBlackEnum.RED,
    evenOdd: EvenOddEnum.ODD,
    lowHigh: LowHighEnum.HIGH,
    column: ColumnsEnum.SECOND_COLUMN,
    dozen: DozensEnum.SECOND_DOZEN,
    line: [LineEnum.SEVENTH_LINE, LineEnum.EIGHTH_LINE],
  },
  {
    number: "24",
    redBlack: RedBlackEnum.BLACK,
    evenOdd: EvenOddEnum.EVEN,
    lowHigh: LowHighEnum.HIGH,
    column: ColumnsEnum.THIRD_COLUMN,
    dozen: DozensEnum.SECOND_DOZEN,
    line: [LineEnum.SEVENTH_LINE, LineEnum.EIGHTH_LINE],
  },
  //---------------- Third Dozen
  {
    number: "25",
    redBlack: RedBlackEnum.RED,
    evenOdd: EvenOddEnum.ODD,
    lowHigh: LowHighEnum.HIGH,
    column: ColumnsEnum.FIRST_COLUMN,
    dozen: DozensEnum.THIRD_DOZEN,
    line: [LineEnum.EIGHTH_LINE, LineEnum.NINTH_LINE],
  },
  {
    number: "26",
    redBlack: RedBlackEnum.BLACK,
    evenOdd: EvenOddEnum.EVEN,
    lowHigh: LowHighEnum.HIGH,
    column: ColumnsEnum.SECOND_COLUMN,
    dozen: DozensEnum.THIRD_DOZEN,
    line: [LineEnum.EIGHTH_LINE, LineEnum.NINTH_LINE],
  },
  {
    number: "27",
    redBlack: RedBlackEnum.RED,
    evenOdd: EvenOddEnum.ODD,
    lowHigh: LowHighEnum.HIGH,
    column: ColumnsEnum.THIRD_COLUMN,
    dozen: DozensEnum.THIRD_DOZEN,
    line: [LineEnum.EIGHTH_LINE, LineEnum.NINTH_LINE],
  },
  {
    number: "28",
    redBlack: RedBlackEnum.BLACK,
    evenOdd: EvenOddEnum.EVEN,
    lowHigh: LowHighEnum.HIGH,
    column: ColumnsEnum.FIRST_COLUMN,
    dozen: DozensEnum.THIRD_DOZEN,
    line: [LineEnum.NINTH_LINE, LineEnum.TENTH_LINE],
  },
  {
    number: "29",
    redBlack: RedBlackEnum.BLACK,
    evenOdd: EvenOddEnum.ODD,
    lowHigh: LowHighEnum.HIGH,
    column: ColumnsEnum.SECOND_COLUMN,
    dozen: DozensEnum.THIRD_DOZEN,
    line: [LineEnum.NINTH_LINE, LineEnum.TENTH_LINE],
  },
  {
    number: "30",
    redBlack: RedBlackEnum.RED,
    evenOdd: EvenOddEnum.EVEN,
    lowHigh: LowHighEnum.HIGH,
    column: ColumnsEnum.THIRD_COLUMN,
    dozen: DozensEnum.THIRD_DOZEN,
    line: [LineEnum.NINTH_LINE, LineEnum.TENTH_LINE],
  },
  {
    number: "31",
    redBlack: RedBlackEnum.BLACK,
    evenOdd: EvenOddEnum.ODD,
    lowHigh: LowHighEnum.HIGH,
    column: ColumnsEnum.FIRST_COLUMN,
    dozen: DozensEnum.THIRD_DOZEN,
    line: [LineEnum.TENTH_LINE, LineEnum.ELEVENTH_LINE],
  },
  {
    number: "32",
    redBlack: RedBlackEnum.RED,
    evenOdd: EvenOddEnum.EVEN,
    lowHigh: LowHighEnum.HIGH,
    column: ColumnsEnum.SECOND_COLUMN,
    dozen: DozensEnum.THIRD_DOZEN,
    line: [LineEnum.TENTH_LINE, LineEnum.ELEVENTH_LINE],
  },
  {
    number: "33",
    redBlack: RedBlackEnum.BLACK,
    evenOdd: EvenOddEnum.ODD,
    lowHigh: LowHighEnum.HIGH,
    column: ColumnsEnum.THIRD_COLUMN,
    dozen: DozensEnum.THIRD_DOZEN,
    line: [LineEnum.TENTH_LINE, LineEnum.ELEVENTH_LINE],
  },
  {
    number: "34",
    redBlack: RedBlackEnum.RED,
    evenOdd: EvenOddEnum.EVEN,
    lowHigh: LowHighEnum.HIGH,
    column: ColumnsEnum.FIRST_COLUMN,
    dozen: DozensEnum.THIRD_DOZEN,
    line: [LineEnum.ELEVENTH_LINE],
  },
  {
    number: "35",
    redBlack: RedBlackEnum.BLACK,
    evenOdd: EvenOddEnum.ODD,
    lowHigh: LowHighEnum.HIGH,
    column: ColumnsEnum.SECOND_COLUMN,
    dozen: DozensEnum.THIRD_DOZEN,
    line: [LineEnum.ELEVENTH_LINE],
  },
  {
    number: "36",
    redBlack: RedBlackEnum.RED,
    evenOdd: EvenOddEnum.EVEN,
    lowHigh: LowHighEnum.HIGH,
    column: ColumnsEnum.THIRD_COLUMN,
    dozen: DozensEnum.THIRD_DOZEN,
    line: [LineEnum.ELEVENTH_LINE],
  },
];

interface BetSize {
  round: number;
  multiplier: number;
  type: BetType;
}

enum BetType {
  BET_5_TO_1,
  BET_2_TO_1,
  BET_1_TO_1,
}

const betSize: BetSize[] = [
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

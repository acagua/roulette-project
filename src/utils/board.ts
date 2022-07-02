export enum LowHighEnum {
  ZERO = 0,
  LOW = 1,
  HIGH = 2,
}

export enum EvenOddEnum {
  ZERO = 0,
  EVEN = 1,
  ODD = 2,
}

export enum RedBlackEnum {
  GREEN = 0,
  RED = 1,
  BLACK = 2,
}

export enum DozensEnum {
  ZERO = 0,
  FIRST_DOZEN = 1,
  SECOND_DOZEN = 2,
  THIRD_DOZEN = 3,
}

export enum LinesEnum {
  ZERO = 0,
  FIRST_LINE = 1,
  SECOND_LINE = 2,
  THIRD_LINE = 3,
}

export enum ZoneTypes {
  DOZEN = 'dozen',
  LINE = 'line',
  LOW_HIGH = 'high-low',
  EVEN_ODD = 'even-odd',
  RED_BLACK = 'red-black'
}

export interface RouletteNumber {
  number: string;
  redBlack: RedBlackEnum;
  evenOdd:EvenOddEnum;
  lowHigh:LowHighEnum;
  line: LinesEnum;
  dozen: DozensEnum;
}

export const colorMapper = {
  0:'green',
  1:'red',
  2: 'black',
}

export const numberList: Array<RouletteNumber> = [
  //---------------- Zeros
  {
    number: "0",
    redBlack: RedBlackEnum.GREEN,
    evenOdd:EvenOddEnum.ZERO,
    lowHigh:LowHighEnum.ZERO,
    line:LinesEnum.ZERO,
    dozen:DozensEnum.ZERO,
  },
  {
    number: "00",
    redBlack: RedBlackEnum.GREEN,
    evenOdd:EvenOddEnum.ZERO,
    lowHigh:LowHighEnum.ZERO,
    line:LinesEnum.ZERO,
    dozen:DozensEnum.ZERO,
  },
  //---------------- First Dozen
  {
    number: "1",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.LOW,
    line: LinesEnum.FIRST_LINE,
    dozen: DozensEnum.FIRST_DOZEN,

  },
  {
    number: "2",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.LOW,
    line: LinesEnum.SECOND_LINE,
    dozen: DozensEnum.FIRST_DOZEN,
  },
  {
    number: "3",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.LOW,
    line: LinesEnum.THIRD_LINE,
    dozen: DozensEnum.FIRST_DOZEN,
  },
  {
    number: "4",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.LOW,
    line: LinesEnum.FIRST_LINE,
    dozen: DozensEnum.FIRST_DOZEN,
  },
  {
    number: "5",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.LOW,
    line: LinesEnum.SECOND_LINE,
    dozen: DozensEnum.FIRST_DOZEN,
  },
  {
    number: "6",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.LOW,
    line: LinesEnum.THIRD_LINE,
    dozen: DozensEnum.FIRST_DOZEN,
  },
  {
    number: "7",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.LOW,
    line: LinesEnum.FIRST_LINE,
    dozen: DozensEnum.FIRST_DOZEN,
  },
  {
    number: "8",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.LOW,
    line: LinesEnum.SECOND_LINE,
    dozen: DozensEnum.FIRST_DOZEN,
  },
  {
    number: "9",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.LOW,
    line: LinesEnum.THIRD_LINE,
    dozen: DozensEnum.FIRST_DOZEN,
  },
  {
    number: "10",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.LOW,
    line: LinesEnum.FIRST_LINE,
    dozen: DozensEnum.FIRST_DOZEN,
  },
  {
    number: "11",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.LOW,
    line: LinesEnum.SECOND_LINE,
    dozen: DozensEnum.FIRST_DOZEN,
  },
  {
    number: "12",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.LOW,
    line: LinesEnum.THIRD_LINE,
    dozen: DozensEnum.FIRST_DOZEN,
  },
  //---------------- Second Dozen
  {
    number: "13",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.LOW,
    line: LinesEnum.FIRST_LINE,
    dozen: DozensEnum.SECOND_DOZEN,
  },
  {
    number: "14",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.LOW,
    line: LinesEnum.SECOND_LINE,
    dozen: DozensEnum.SECOND_DOZEN,
  },
  {
    number: "15",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.LOW,
    line: LinesEnum.THIRD_LINE,
    dozen: DozensEnum.SECOND_DOZEN,
  },
  {
    number: "16",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.LOW,
    line: LinesEnum.FIRST_LINE,
    dozen: DozensEnum.SECOND_DOZEN,
  },
  {
    number: "17",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.LOW,
    line: LinesEnum.SECOND_LINE,
    dozen: DozensEnum.SECOND_DOZEN,
  },
  {
    number: "18",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.LOW,
    line: LinesEnum.THIRD_LINE,
    dozen: DozensEnum.SECOND_DOZEN,
  },
  //---------------- Mid Board
  {
    number: "19",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.HIGH,
    line: LinesEnum.FIRST_LINE,
    dozen: DozensEnum.SECOND_DOZEN,
  },
  {
    number: "20",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.HIGH,
    line: LinesEnum.SECOND_LINE,
    dozen: DozensEnum.SECOND_DOZEN,
  },
  {
    number: "21",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.HIGH,
    line: LinesEnum.THIRD_LINE,
    dozen: DozensEnum.SECOND_DOZEN,
  },
  {
    number: "22",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.HIGH,
    line: LinesEnum.FIRST_LINE,
    dozen: DozensEnum.SECOND_DOZEN,
  },
  {
    number: "23",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.HIGH,
    line: LinesEnum.SECOND_LINE,
    dozen: DozensEnum.SECOND_DOZEN,
  },
  {
    number: "24",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.HIGH,
    line: LinesEnum.THIRD_LINE,
    dozen: DozensEnum.SECOND_DOZEN,
  },
  //---------------- Third Dozen
  {
    number: "25",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.HIGH,
    line: LinesEnum.FIRST_LINE,
    dozen: DozensEnum.THIRD_DOZEN,
  },
  {
    number: "26",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.HIGH,
    line: LinesEnum.SECOND_LINE,
    dozen: DozensEnum.THIRD_DOZEN,
  },
  {
    number: "27",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.HIGH,
    line: LinesEnum.THIRD_LINE,
    dozen: DozensEnum.THIRD_DOZEN,
  },
  {
    number: "28",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.HIGH,
    line: LinesEnum.FIRST_LINE,
    dozen: DozensEnum.THIRD_DOZEN,
  },
  {
    number: "29",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.HIGH,
    line: LinesEnum.SECOND_LINE,
    dozen: DozensEnum.THIRD_DOZEN,
  },
  {
    number: "30",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.HIGH,
    line: LinesEnum.THIRD_LINE,
    dozen: DozensEnum.THIRD_DOZEN,
  },
  {
    number: "31",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.HIGH,
    line: LinesEnum.FIRST_LINE,
    dozen: DozensEnum.THIRD_DOZEN,
  },
  {
    number: "32",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.HIGH,
    line: LinesEnum.SECOND_LINE,
    dozen: DozensEnum.THIRD_DOZEN,
  },
  {
    number: "33",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.HIGH,
    line: LinesEnum.THIRD_LINE,
    dozen: DozensEnum.THIRD_DOZEN,
  },
  {
    number: "34",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.HIGH,
    line: LinesEnum.FIRST_LINE,
    dozen: DozensEnum.THIRD_DOZEN,
  },
  {
    number: "35",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.HIGH,
    line: LinesEnum.SECOND_LINE,
    dozen: DozensEnum.THIRD_DOZEN,
  },
  {
    number: "36",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.HIGH,
    line: LinesEnum.THIRD_LINE,
    dozen: DozensEnum.THIRD_DOZEN,
  },
];

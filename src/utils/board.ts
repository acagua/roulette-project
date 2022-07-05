import { IZone } from '../redux/reducers/rouletteReducer';
import { BetType } from './bet';
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

export enum ColumnsEnum {
  ZERO = 0,
  FIRST_COLUMN = 1,
  SECOND_COLUMN = 2,
  THIRD_COLUMN = 3,
}

export enum LineEnum {
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

export enum ZoneTypes {
  DOZEN = 'dozen',
  COLUMN = 'column',
  LOW_HIGH = 'high-low',
  EVEN_ODD = 'even-odd',
  RED_BLACK = 'red-black',
  LINE = 'line'
}

export interface RouletteNumber {
  number: string;
  redBlack: RedBlackEnum;
  evenOdd:EvenOddEnum;
  lowHigh:LowHighEnum;
  column: ColumnsEnum;
  dozen: DozensEnum;
  line: LineEnum[];
}

export const colorMapper = {
  0:'green',
  1:'red',
  2: 'black',
}

interface BackgroundMapper {
  [key: number]: string
}
const oneToOneBackgroundMapper:BackgroundMapper= {
  3: 'risky-bet-zone',
  4: 'risky-bet-zone',
  5: 'medium-bet-zone',
  6: 'medium-bet-zone',
  7: 'conservative-bet-zone',
}

const twoToOneBackgroundMapper:BackgroundMapper = {
  4: 'risky-bet-zone',
  5: 'risky-bet-zone',
  6: 'risky-bet-zone',
  7: 'medium-bet-zone',
  8: 'medium-bet-zone',
  9: 'medium-bet-zone',
  10: 'conservative-bet-zone',
}

const fiveToOneBackgroundMapper:BackgroundMapper = {
  14: 'risky-bet-zone',
  15: 'risky-bet-zone',
  16: 'risky-bet-zone',
  17: 'risky-bet-zone',
  18: 'risky-bet-zone',
  19: 'medium-bet-zone',
  20: 'medium-bet-zone',
  21: 'medium-bet-zone',
  22: 'medium-bet-zone',
  23: 'medium-bet-zone',
  24: 'conservative-bet-zone',
}

export const getHighlightStyle = (locked:boolean, counter: number, betType: BetType):string => {
  if(locked) return 'locked-bet-zone';
  let mapper = oneToOneBackgroundMapper;
  let max = 7;
  if(counter < 3) return ''; 

  if(betType === BetType.BET_2_TO_1){
    mapper = twoToOneBackgroundMapper;
    max = 10;
    if(counter < 4) return '';
  } 
  if( betType === BetType.BET_5_TO_1){
    mapper = fiveToOneBackgroundMapper;
    max = 24;
    if(counter < 14) return '';
  }

  return mapper[Math.min(counter,max)];
}

export const numberList: Array<RouletteNumber> = [
  //---------------- Zeros
  {
    number: "0",
    redBlack: RedBlackEnum.GREEN,
    evenOdd:EvenOddEnum.ZERO,
    lowHigh:LowHighEnum.ZERO,
    column:ColumnsEnum.ZERO,
    dozen:DozensEnum.ZERO,
    line:[LineEnum.TOP_LINE],
  },
  {
    number: "00",
    redBlack: RedBlackEnum.GREEN,
    evenOdd:EvenOddEnum.ZERO,
    lowHigh:LowHighEnum.ZERO,
    column:ColumnsEnum.ZERO,
    dozen:DozensEnum.ZERO,
    line:[LineEnum.TOP_LINE],
  },
  //---------------- First Dozen
  {
    number: "1",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.LOW,
    column: ColumnsEnum.FIRST_COLUMN,
    dozen: DozensEnum.FIRST_DOZEN,
    line:[LineEnum.TOP_LINE, LineEnum.FIRST_LINE],

  },
  {
    number: "2",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.LOW,
    column: ColumnsEnum.SECOND_COLUMN,
    dozen: DozensEnum.FIRST_DOZEN,
    line:[LineEnum.TOP_LINE, LineEnum.FIRST_LINE],
  },
  {
    number: "3",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.LOW,
    column: ColumnsEnum.THIRD_COLUMN,
    dozen: DozensEnum.FIRST_DOZEN,
    line:[LineEnum.TOP_LINE, LineEnum.FIRST_LINE],
  },
  {
    number: "4",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.LOW,
    column: ColumnsEnum.FIRST_COLUMN,
    dozen: DozensEnum.FIRST_DOZEN,
    line:[LineEnum.FIRST_LINE, LineEnum.SECOND_LINE],
  },
  {
    number: "5",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.LOW,
    column: ColumnsEnum.SECOND_COLUMN,
    dozen: DozensEnum.FIRST_DOZEN,
    line:[LineEnum.FIRST_LINE, LineEnum.SECOND_LINE],
  },
  {
    number: "6",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.LOW,
    column: ColumnsEnum.THIRD_COLUMN,
    dozen: DozensEnum.FIRST_DOZEN,
    line:[LineEnum.FIRST_LINE, LineEnum.SECOND_LINE],
  },
  {
    number: "7",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.LOW,
    column: ColumnsEnum.FIRST_COLUMN,
    dozen: DozensEnum.FIRST_DOZEN,
    line:[LineEnum.SECOND_LINE, LineEnum.THIRD_LINE],
  },
  {
    number: "8",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.LOW,
    column: ColumnsEnum.SECOND_COLUMN,
    dozen: DozensEnum.FIRST_DOZEN,
    line:[LineEnum.SECOND_LINE, LineEnum.THIRD_LINE]    
  },
  {
    number: "9",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.LOW,
    column: ColumnsEnum.THIRD_COLUMN,
    dozen: DozensEnum.FIRST_DOZEN,
    line:[LineEnum.SECOND_LINE, LineEnum.THIRD_LINE],
  },
  {
    number: "10",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.LOW,
    column: ColumnsEnum.FIRST_COLUMN,
    dozen: DozensEnum.FIRST_DOZEN,
    line:[LineEnum.THIRD_LINE, LineEnum.FOURTH_LINE],

  },
  {
    number: "11",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.LOW,
    column: ColumnsEnum.SECOND_COLUMN,
    dozen: DozensEnum.FIRST_DOZEN,
    line:[LineEnum.THIRD_LINE, LineEnum.FOURTH_LINE],

  },
  {
    number: "12",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.LOW,
    column: ColumnsEnum.THIRD_COLUMN,
    dozen: DozensEnum.FIRST_DOZEN,
    line:[LineEnum.THIRD_LINE, LineEnum.FOURTH_LINE],

  },
  //---------------- Second Dozen
  {
    number: "13",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.LOW,
    column: ColumnsEnum.FIRST_COLUMN,
    dozen: DozensEnum.SECOND_DOZEN,
    line:[LineEnum.FOURTH_LINE, LineEnum.FIFTH_LINE],

  },
  {
    number: "14",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.LOW,
    column: ColumnsEnum.SECOND_COLUMN,
    dozen: DozensEnum.SECOND_DOZEN,
    line:[LineEnum.FOURTH_LINE, LineEnum.FIFTH_LINE],
  },
  {
    number: "15",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.LOW,
    column: ColumnsEnum.THIRD_COLUMN,
    dozen: DozensEnum.SECOND_DOZEN,
    line:[LineEnum.FOURTH_LINE, LineEnum.FIFTH_LINE],
  },
  {
    number: "16",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.LOW,
    column: ColumnsEnum.FIRST_COLUMN,
    dozen: DozensEnum.SECOND_DOZEN,
    line:[LineEnum.FIFTH_LINE, LineEnum.SIXTH_LINE],
  },
  {
    number: "17",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.LOW,
    column: ColumnsEnum.SECOND_COLUMN,
    dozen: DozensEnum.SECOND_DOZEN,
    line:[LineEnum.FIFTH_LINE, LineEnum.SIXTH_LINE],
  },
  {
    number: "18",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.LOW,
    column: ColumnsEnum.THIRD_COLUMN,
    dozen: DozensEnum.SECOND_DOZEN,
    line:[LineEnum.FIFTH_LINE, LineEnum.SIXTH_LINE],
  },
  //---------------- Mid Board
  {
    number: "19",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.HIGH,
    column: ColumnsEnum.FIRST_COLUMN,
    dozen: DozensEnum.SECOND_DOZEN,
    line:[LineEnum.SIXTH_LINE, LineEnum.SEVENTH_LINE],
  },
  {
    number: "20",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.HIGH,
    column: ColumnsEnum.SECOND_COLUMN,
    dozen: DozensEnum.SECOND_DOZEN,
    line:[LineEnum.SIXTH_LINE, LineEnum.SEVENTH_LINE],
  },
  {
    number: "21",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.HIGH,
    column: ColumnsEnum.THIRD_COLUMN,
    dozen: DozensEnum.SECOND_DOZEN,
    line:[LineEnum.SIXTH_LINE, LineEnum.SEVENTH_LINE],
  },
  {
    number: "22",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.HIGH,
    column: ColumnsEnum.FIRST_COLUMN,
    dozen: DozensEnum.SECOND_DOZEN,
    line:[LineEnum.SEVENTH_LINE, LineEnum.EIGHTH_LINE],
  },
  {
    number: "23",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.HIGH,
    column: ColumnsEnum.SECOND_COLUMN,
    dozen: DozensEnum.SECOND_DOZEN,
    line:[LineEnum.SEVENTH_LINE, LineEnum.EIGHTH_LINE],
  },
  {
    number: "24",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.HIGH,
    column: ColumnsEnum.THIRD_COLUMN,
    dozen: DozensEnum.SECOND_DOZEN,
    line:[LineEnum.SEVENTH_LINE, LineEnum.EIGHTH_LINE],
  },
  //---------------- Third Dozen
  {
    number: "25",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.HIGH,
    column: ColumnsEnum.FIRST_COLUMN,
    dozen: DozensEnum.THIRD_DOZEN,
    line:[LineEnum.EIGHTH_LINE, LineEnum.NINTH_LINE],
  },
  {
    number: "26",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.HIGH,
    column: ColumnsEnum.SECOND_COLUMN,
    dozen: DozensEnum.THIRD_DOZEN,
    line:[LineEnum.EIGHTH_LINE, LineEnum.NINTH_LINE],
  },
  {
    number: "27",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.HIGH,
    column: ColumnsEnum.THIRD_COLUMN,
    dozen: DozensEnum.THIRD_DOZEN,
    line:[LineEnum.EIGHTH_LINE, LineEnum.NINTH_LINE],
  },
  {
    number: "28",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.HIGH,
    column: ColumnsEnum.FIRST_COLUMN,
    dozen: DozensEnum.THIRD_DOZEN,
    line:[LineEnum.NINTH_LINE, LineEnum.TENTH_LINE],
  },
  {
    number: "29",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.HIGH,
    column: ColumnsEnum.SECOND_COLUMN,
    dozen: DozensEnum.THIRD_DOZEN,
    line:[LineEnum.NINTH_LINE, LineEnum.TENTH_LINE],
  },
  {
    number: "30",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.HIGH,
    column: ColumnsEnum.THIRD_COLUMN,
    dozen: DozensEnum.THIRD_DOZEN,
    line:[LineEnum.NINTH_LINE, LineEnum.TENTH_LINE],
  },
  {
    number: "31",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.HIGH,
    column: ColumnsEnum.FIRST_COLUMN,
    dozen: DozensEnum.THIRD_DOZEN,
    line:[LineEnum.TENTH_LINE, LineEnum.ELEVENTH_LINE],
  },
  {
    number: "32",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.HIGH,
    column: ColumnsEnum.SECOND_COLUMN,
    dozen: DozensEnum.THIRD_DOZEN,
    line:[LineEnum.TENTH_LINE, LineEnum.ELEVENTH_LINE],
  },
  {
    number: "33",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.HIGH,
    column: ColumnsEnum.THIRD_COLUMN,
    dozen: DozensEnum.THIRD_DOZEN,
    line:[LineEnum.TENTH_LINE, LineEnum.ELEVENTH_LINE],
  },
  {
    number: "34",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.HIGH,
    column: ColumnsEnum.FIRST_COLUMN,
    dozen: DozensEnum.THIRD_DOZEN,
    line:[LineEnum.ELEVENTH_LINE],
  },
  {
    number: "35",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.HIGH,
    column: ColumnsEnum.SECOND_COLUMN,
    dozen: DozensEnum.THIRD_DOZEN,
    line:[LineEnum.ELEVENTH_LINE],
  },
  {
    number: "36",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.HIGH,
    column: ColumnsEnum.THIRD_COLUMN,
    dozen: DozensEnum.THIRD_DOZEN,
    line:[LineEnum.ELEVENTH_LINE],
  },
];

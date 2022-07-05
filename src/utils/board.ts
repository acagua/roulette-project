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

export enum ZoneTypes {
  DOZEN = 'dozen',
  COLUMN = 'column',
  LOW_HIGH = 'high-low',
  EVEN_ODD = 'even-odd',
  RED_BLACK = 'red-black',

}

export interface RouletteNumber {
  number: string;
  redBlack: RedBlackEnum;
  evenOdd:EvenOddEnum;
  lowHigh:LowHighEnum;
  column: ColumnsEnum;
  dozen: DozensEnum;
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
  6: 'medium-bet-zone',
  7: 'medium-bet-zone',
  8: 'conservative-bet-zone',
}

export const getHighlightStyle = (locked:boolean, counter: number, betType: BetType):string => {
  if(locked) return 'locked-bet-zone';
  let mapper = oneToOneBackgroundMapper;
  let max = 7;
  if(counter < 3) return ''; 

  if(betType === BetType.BET_2_TO_1){
    mapper = twoToOneBackgroundMapper;
    max = 8;
    if(counter < 4) return '';
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
  },
  {
    number: "00",
    redBlack: RedBlackEnum.GREEN,
    evenOdd:EvenOddEnum.ZERO,
    lowHigh:LowHighEnum.ZERO,
    column:ColumnsEnum.ZERO,
    dozen:DozensEnum.ZERO,
  },
  //---------------- First Dozen
  {
    number: "1",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.LOW,
    column: ColumnsEnum.FIRST_COLUMN,
    dozen: DozensEnum.FIRST_DOZEN,

  },
  {
    number: "2",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.LOW,
    column: ColumnsEnum.SECOND_COLUMN,
    dozen: DozensEnum.FIRST_DOZEN,
  },
  {
    number: "3",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.LOW,
    column: ColumnsEnum.THIRD_COLUMN,
    dozen: DozensEnum.FIRST_DOZEN,
  },
  {
    number: "4",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.LOW,
    column: ColumnsEnum.FIRST_COLUMN,
    dozen: DozensEnum.FIRST_DOZEN,
  },
  {
    number: "5",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.LOW,
    column: ColumnsEnum.SECOND_COLUMN,
    dozen: DozensEnum.FIRST_DOZEN,
  },
  {
    number: "6",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.LOW,
    column: ColumnsEnum.THIRD_COLUMN,
    dozen: DozensEnum.FIRST_DOZEN,
  },
  {
    number: "7",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.LOW,
    column: ColumnsEnum.FIRST_COLUMN,
    dozen: DozensEnum.FIRST_DOZEN,
  },
  {
    number: "8",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.LOW,
    column: ColumnsEnum.SECOND_COLUMN,
    dozen: DozensEnum.FIRST_DOZEN,
  },
  {
    number: "9",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.LOW,
    column: ColumnsEnum.THIRD_COLUMN,
    dozen: DozensEnum.FIRST_DOZEN,
  },
  {
    number: "10",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.LOW,
    column: ColumnsEnum.FIRST_COLUMN,
    dozen: DozensEnum.FIRST_DOZEN,
  },
  {
    number: "11",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.LOW,
    column: ColumnsEnum.SECOND_COLUMN,
    dozen: DozensEnum.FIRST_DOZEN,
  },
  {
    number: "12",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.LOW,
    column: ColumnsEnum.THIRD_COLUMN,
    dozen: DozensEnum.FIRST_DOZEN,
  },
  //---------------- Second Dozen
  {
    number: "13",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.LOW,
    column: ColumnsEnum.FIRST_COLUMN,
    dozen: DozensEnum.SECOND_DOZEN,
  },
  {
    number: "14",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.LOW,
    column: ColumnsEnum.SECOND_COLUMN,
    dozen: DozensEnum.SECOND_DOZEN,
  },
  {
    number: "15",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.LOW,
    column: ColumnsEnum.THIRD_COLUMN,
    dozen: DozensEnum.SECOND_DOZEN,
  },
  {
    number: "16",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.LOW,
    column: ColumnsEnum.FIRST_COLUMN,
    dozen: DozensEnum.SECOND_DOZEN,
  },
  {
    number: "17",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.LOW,
    column: ColumnsEnum.SECOND_COLUMN,
    dozen: DozensEnum.SECOND_DOZEN,
  },
  {
    number: "18",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.LOW,
    column: ColumnsEnum.THIRD_COLUMN,
    dozen: DozensEnum.SECOND_DOZEN,
  },
  //---------------- Mid Board
  {
    number: "19",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.HIGH,
    column: ColumnsEnum.FIRST_COLUMN,
    dozen: DozensEnum.SECOND_DOZEN,
  },
  {
    number: "20",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.HIGH,
    column: ColumnsEnum.SECOND_COLUMN,
    dozen: DozensEnum.SECOND_DOZEN,
  },
  {
    number: "21",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.HIGH,
    column: ColumnsEnum.THIRD_COLUMN,
    dozen: DozensEnum.SECOND_DOZEN,
  },
  {
    number: "22",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.HIGH,
    column: ColumnsEnum.FIRST_COLUMN,
    dozen: DozensEnum.SECOND_DOZEN,
  },
  {
    number: "23",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.HIGH,
    column: ColumnsEnum.SECOND_COLUMN,
    dozen: DozensEnum.SECOND_DOZEN,
  },
  {
    number: "24",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.HIGH,
    column: ColumnsEnum.THIRD_COLUMN,
    dozen: DozensEnum.SECOND_DOZEN,
  },
  //---------------- Third Dozen
  {
    number: "25",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.HIGH,
    column: ColumnsEnum.FIRST_COLUMN,
    dozen: DozensEnum.THIRD_DOZEN,
  },
  {
    number: "26",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.HIGH,
    column: ColumnsEnum.SECOND_COLUMN,
    dozen: DozensEnum.THIRD_DOZEN,
  },
  {
    number: "27",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.HIGH,
    column: ColumnsEnum.THIRD_COLUMN,
    dozen: DozensEnum.THIRD_DOZEN,
  },
  {
    number: "28",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.HIGH,
    column: ColumnsEnum.FIRST_COLUMN,
    dozen: DozensEnum.THIRD_DOZEN,
  },
  {
    number: "29",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.HIGH,
    column: ColumnsEnum.SECOND_COLUMN,
    dozen: DozensEnum.THIRD_DOZEN,
  },
  {
    number: "30",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.HIGH,
    column: ColumnsEnum.THIRD_COLUMN,
    dozen: DozensEnum.THIRD_DOZEN,
  },
  {
    number: "31",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.HIGH,
    column: ColumnsEnum.FIRST_COLUMN,
    dozen: DozensEnum.THIRD_DOZEN,
  },
  {
    number: "32",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.HIGH,
    column: ColumnsEnum.SECOND_COLUMN,
    dozen: DozensEnum.THIRD_DOZEN,
  },
  {
    number: "33",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.HIGH,
    column: ColumnsEnum.THIRD_COLUMN,
    dozen: DozensEnum.THIRD_DOZEN,
  },
  {
    number: "34",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.HIGH,
    column: ColumnsEnum.FIRST_COLUMN,
    dozen: DozensEnum.THIRD_DOZEN,
  },
  {
    number: "35",
    redBlack: RedBlackEnum.BLACK,
    evenOdd:EvenOddEnum.ODD,
    lowHigh:LowHighEnum.HIGH,
    column: ColumnsEnum.SECOND_COLUMN,
    dozen: DozensEnum.THIRD_DOZEN,
  },
  {
    number: "36",
    redBlack: RedBlackEnum.RED,
    evenOdd:EvenOddEnum.EVEN,
    lowHigh:LowHighEnum.HIGH,
    column: ColumnsEnum.THIRD_COLUMN,
    dozen: DozensEnum.THIRD_DOZEN,
  },
];

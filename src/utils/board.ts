export enum colorsEnum {
  BLACK = "black",
  GREEN = "green",
  RED = "red",
}

export enum dozensEnum {
  FIRST_DOZEN = 1,
  SECOND_DOZEN = 2,
  THIRD_DOZEN = 3,
}

export enum linesEnum {
  FIRST_LINE = 1,
  SECOND_LINE = 2,
  THIRD_LINE = 3,
}

export enum zoneTypes {
  DOZEN = 'dozen',
  LINE = 'line',
}

export interface RouletteNumber {
  number: string;
  color: colorsEnum;
  line?: linesEnum;
  dozen?: dozensEnum;
}

// export const dozen1Numbers = [
//   "1",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "10",
//   "11",
//   "12",
// ];
// export const dozen2Numbers = [
//   "13",
//   "14",
//   "15",
//   "16",
//   "17",
//   "18",
//   "19",
//   "20",
//   "21",
//   "22",
//   "23",
//   "24",
// ];
// export const dozen3Numbers = [
//   "25",
//   "26",
//   "27",
//   "28",
//   "29",
//   "30",
//   "31",
//   "32",
//   "33",
//   "34",
//   "35",
//   "36",
// ];

// export const line1Numbers = [
//   "1",
//   "4",
//   "7",
//   "10",
//   "13",
//   "16",
//   "19",
//   "22",
//   "25",
//   "28",
//   "31",
//   "34",
// ];
// export const line2Numbers = [
//   "2",
//   "5",
//   "8",
//   "11",
//   "14",
//   "17",
//   "20",
//   "23",
//   "26",
//   "29",
//   "32",
//   "35",
// ];
// export const line3Numbers = [
//   "3",
//   "6",
//   "9",
//   "12",
//   "15",
//   "18",
//   "21",
//   "24",
//   "27",
//   "30",
//   "33",
//   "36",
// ];

export const numberList: Array<RouletteNumber> = [
  //---------------- Zeros
  {
    number: "0",
    color: colorsEnum.GREEN,
  },
  {
    number: "00",
    color: colorsEnum.GREEN,
  },
  //---------------- First Dozen
  {
    number: "1",
    color: colorsEnum.RED,
    line: linesEnum.FIRST_LINE,
    dozen: dozensEnum.FIRST_DOZEN,
  },
  {
    number: "2",
    color: colorsEnum.BLACK,
    line: linesEnum.SECOND_LINE,
    dozen: dozensEnum.FIRST_DOZEN,
  },
  {
    number: "3",
    color: colorsEnum.RED,
    line: linesEnum.THIRD_LINE,
    dozen: dozensEnum.FIRST_DOZEN,
  },
  {
    number: "4",
    color: colorsEnum.BLACK,
    line: linesEnum.FIRST_LINE,
    dozen: dozensEnum.FIRST_DOZEN,
  },
  {
    number: "5",
    color: colorsEnum.RED,
    line: linesEnum.SECOND_LINE,
    dozen: dozensEnum.FIRST_DOZEN,
  },
  {
    number: "6",
    color: colorsEnum.BLACK,
    line: linesEnum.THIRD_LINE,
    dozen: dozensEnum.FIRST_DOZEN,
  },
  {
    number: "7",
    color: colorsEnum.RED,
    line: linesEnum.FIRST_LINE,
    dozen: dozensEnum.FIRST_DOZEN,
  },
  {
    number: "8",
    color: colorsEnum.BLACK,
    line: linesEnum.SECOND_LINE,
    dozen: dozensEnum.FIRST_DOZEN,
  },
  {
    number: "9",
    color: colorsEnum.RED,
    line: linesEnum.THIRD_LINE,
    dozen: dozensEnum.FIRST_DOZEN,
  },
  {
    number: "10",
    color: colorsEnum.BLACK,
    line: linesEnum.FIRST_LINE,
    dozen: dozensEnum.FIRST_DOZEN,
  },
  {
    number: "11",
    color: colorsEnum.BLACK,
    line: linesEnum.SECOND_LINE,
    dozen: dozensEnum.FIRST_DOZEN,
  },
  {
    number: "12",
    color: colorsEnum.RED,
    line: linesEnum.THIRD_LINE,
    dozen: dozensEnum.FIRST_DOZEN,
  },
  //---------------- Second Dozen
  {
    number: "13",
    color: colorsEnum.BLACK,
    line: linesEnum.FIRST_LINE,
    dozen: dozensEnum.SECOND_DOZEN,
  },
  {
    number: "14",
    color: colorsEnum.RED,
    line: linesEnum.SECOND_LINE,
    dozen: dozensEnum.SECOND_DOZEN,
  },
  {
    number: "15",
    color: colorsEnum.BLACK,
    line: linesEnum.THIRD_LINE,
    dozen: dozensEnum.SECOND_DOZEN,
  },
  {
    number: "16",
    color: colorsEnum.RED,
    line: linesEnum.FIRST_LINE,
    dozen: dozensEnum.SECOND_DOZEN,
  },
  {
    number: "17",
    color: colorsEnum.BLACK,
    line: linesEnum.SECOND_LINE,
    dozen: dozensEnum.SECOND_DOZEN,
  },
  {
    number: "18",
    color: colorsEnum.RED,
    line: linesEnum.THIRD_LINE,
    dozen: dozensEnum.SECOND_DOZEN,
  },
  {
    number: "19",
    color: colorsEnum.RED,
    line: linesEnum.FIRST_LINE,
    dozen: dozensEnum.SECOND_DOZEN,
  },
  {
    number: "20",
    color: colorsEnum.BLACK,
    line: linesEnum.SECOND_LINE,
    dozen: dozensEnum.SECOND_DOZEN,
  },
  {
    number: "21",
    color: colorsEnum.RED,
    line: linesEnum.THIRD_LINE,
    dozen: dozensEnum.SECOND_DOZEN,
  },
  {
    number: "22",
    color: colorsEnum.BLACK,
    line: linesEnum.FIRST_LINE,
    dozen: dozensEnum.SECOND_DOZEN,
  },
  {
    number: "23",
    color: colorsEnum.RED,
    line: linesEnum.SECOND_LINE,
    dozen: dozensEnum.SECOND_DOZEN,
  },
  {
    number: "24",
    color: colorsEnum.BLACK,
    line: linesEnum.THIRD_LINE,
    dozen: dozensEnum.SECOND_DOZEN,
  },
  //---------------- Third Dozen
  {
    number: "25",
    color: colorsEnum.RED,
    line: linesEnum.FIRST_LINE,
    dozen: dozensEnum.THIRD_DOZEN,
  },
  {
    number: "26",
    color: colorsEnum.BLACK,
    line: linesEnum.SECOND_LINE,
    dozen: dozensEnum.THIRD_DOZEN,
  },
  {
    number: "27",
    color: colorsEnum.RED,
    line: linesEnum.THIRD_LINE,
    dozen: dozensEnum.THIRD_DOZEN,
  },
  {
    number: "28",
    color: colorsEnum.BLACK,
    line: linesEnum.FIRST_LINE,
    dozen: dozensEnum.THIRD_DOZEN,
  },
  {
    number: "29",
    color: colorsEnum.BLACK,
    line: linesEnum.SECOND_LINE,
    dozen: dozensEnum.THIRD_DOZEN,
  },
  {
    number: "30",
    color: colorsEnum.RED,
    line: linesEnum.THIRD_LINE,
    dozen: dozensEnum.THIRD_DOZEN,
  },
  {
    number: "31",
    color: colorsEnum.BLACK,
    line: linesEnum.FIRST_LINE,
    dozen: dozensEnum.THIRD_DOZEN,
  },
  {
    number: "32",
    color: colorsEnum.RED,
    line: linesEnum.SECOND_LINE,
    dozen: dozensEnum.THIRD_DOZEN,
  },
  {
    number: "33",
    color: colorsEnum.BLACK,
    line: linesEnum.THIRD_LINE,
    dozen: dozensEnum.THIRD_DOZEN,
  },
  {
    number: "34",
    color: colorsEnum.RED,
    line: linesEnum.FIRST_LINE,
    dozen: dozensEnum.THIRD_DOZEN,
  },
  {
    number: "35",
    color: colorsEnum.BLACK,
    line: linesEnum.SECOND_LINE,
    dozen: dozensEnum.THIRD_DOZEN,
  },
  {
    number: "36",
    color: colorsEnum.RED,
    line: linesEnum.THIRD_LINE,
    dozen: dozensEnum.THIRD_DOZEN,
  },
];

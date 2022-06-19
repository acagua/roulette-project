import React from "react";
import { numberList, dozensEnum, zoneTypes, linesEnum } from "../utils/board";
import { BoardNumber } from "./BoardNumber";
import { Dozen } from "./Dozen";
import { Line } from "./Line";
import "../styles/Board.scss";
import { useSelector } from "react-redux";
import { IRouletteState } from "../redux/reducers/rouletteReducer";
import { RootState } from "../redux/reducers";

export const Board = () => {
  const { zoneCounter }: IRouletteState = useSelector(
    (state: RootState) => state.roulette
  );

  const maxZone = zoneCounter.reduce(
    (zone, maxCounterZone) =>
      zone.counter > maxCounterZone.counter ? zone : maxCounterZone,
    zoneCounter[1]
  );

  const zeroNumber = numberList[0];
  const doubleZeroNumber = numberList[1];
  return (
    <section className="board">
      <div className="board-zeros">
        <BoardNumber rouletteNumber={zeroNumber} key="0" />
        <BoardNumber rouletteNumber={doubleZeroNumber} key="00" />
      </div>
      <div className="board-dozens">
        <Dozen
          name="1st 12"
          highlighted={
            maxZone.type === zoneTypes.DOZEN &&
            maxZone.id === dozensEnum.FIRST_DOZEN
          }
        />
        <Dozen
          name="2nd 12"
          highlighted={
            maxZone.type === zoneTypes.DOZEN &&
            maxZone.id === dozensEnum.SECOND_DOZEN
          }
        />
        <Dozen
          name="3rd 12"
          highlighted={
            maxZone.type === zoneTypes.DOZEN &&
            maxZone.id === dozensEnum.THIRD_DOZEN
          }
        />
      </div>
      <div className="board-numbers">
        {numberList
          .filter(({ line }) => line)
          .map((rouletteNumber) => (
            <BoardNumber
              rouletteNumber={rouletteNumber}
              key={rouletteNumber.number}
            />
          ))}
      </div>
      <div className="board-lines">
        <Line
          name="1st Line"
          highlighted={
            maxZone.type === zoneTypes.LINE &&
            maxZone.id === linesEnum.FIRST_LINE
          }
        />
        <Line
          name="2nd Line"
          highlighted={
            maxZone.type === zoneTypes.LINE &&
            maxZone.id === linesEnum.SECOND_LINE
          }
        />
        <Line
          name="3rd Line"
          highlighted={
            maxZone.type === zoneTypes.LINE &&
            maxZone.id === linesEnum.THIRD_LINE
          }
        />
      </div>
    </section>
  );
};

import React from "react";
import { numberList, dozensEnum, zoneTypes, linesEnum } from "../utils/board";
import { BoardNumber } from "./BoardNumber";
import { DozenLine } from "./DozenLine";
// import { Line } from "./Line";
import "../styles/Board.scss";
import { useSelector } from "react-redux";
import { IRouletteState } from "../redux/reducers/rouletteReducer";
import { RootState } from "../redux/reducers";
import { getMaxZone } from "../utils/getMaxZone";

export const Board = () => {
  const { zoneCounter }: IRouletteState = useSelector(
    (state: RootState) => state.roulette
  );
  const maxZone = getMaxZone(zoneCounter);

  const zeroNumber = numberList[0];
  const doubleZeroNumber = numberList[1];
  return (
    <section className="board">
      <div className="board-zeros">
        <BoardNumber rouletteNumber={zeroNumber} key="0" />
        <BoardNumber rouletteNumber={doubleZeroNumber} key="00" />
      </div>
      <div className="board-dozens">
        {
          zoneCounter.filter(zone=>zone.type===zoneTypes.DOZEN).map(zone=> 
          <DozenLine key={`dozen${zone.id}`} name={zone.name} counter={zone.counter} />)
        }
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
      {
          zoneCounter.filter(zone=>zone.type===zoneTypes.LINE).map(zone=> 
          <DozenLine key={`line${zone.id}`} name={zone.name} counter={zone.counter} />)
        }
      </div>
    </section>
  );
};

import React from "react";
import { numberList, ZoneTypes } from "../utils/board";
import { BoardNumber } from "./BoardNumber";
import { BetZone } from "./BetZone";
import "../styles/Board.scss";
import { useSelector } from "react-redux";
import { IRouletteState } from "../redux/reducers/rouletteReducer";
import { RootState } from "../redux/reducers";
import { BetType } from "../utils/bet";

export const Board = () => {
  const { zones }: IRouletteState = useSelector(
    (state: RootState) => state.roulette
  );

  const oneToOneZones = [ZoneTypes.EVEN_ODD, ZoneTypes.LOW_HIGH, ZoneTypes.RED_BLACK]

  return (
    <section className="board">
      <div className="board-zeros">
        {numberList
          .filter(({ column }) => !column)
          .map((rouletteNumber) => (
            <BoardNumber
              rouletteNumber={rouletteNumber}
              key={rouletteNumber.number}
            />
          ))}
      </div>
      <div className='board-one2one'>
        {
          zones.filter(zone=> oneToOneZones.includes(zone.type)).map(zone=> 
          <BetZone key={`${zone.type}${zone.id}`} zone={zone} betType={BetType.BET_1_TO_1}/>)
        }
      </div>
      <div className="board-dozens">
        {
          zones.filter(zone=>zone.type===ZoneTypes.DOZEN).map(zone=> 
          <BetZone key={`${zone.type}${zone.id}`} zone={zone} betType={BetType.BET_2_TO_1}/>)
        }
      </div>
      <div className="board-numbers">
        {numberList
          .filter(({ column }) => column)
          .map((rouletteNumber) => (
            <BoardNumber
              rouletteNumber={rouletteNumber}
              key={rouletteNumber.number}
            />
          ))}
      </div>
      <div className="board-columns">
      {
          zones.filter(zone=>zone.type===ZoneTypes.COLUMN).map(zone=> 
          <BetZone key={`${zone.type}${zone.id}`} zone={zone} betType={BetType.BET_2_TO_1}/>)
        }
      </div>
      <div className="board-line">
        {
          zones.filter(zone=>zone.type===ZoneTypes.LINE).map(zone=> 
          <BetZone key={`${zone.type}${zone.id}`} zone={zone} betType={BetType.BET_5_TO_1}/>)
        }
      </div>
    </section>
  );
};

import React from "react";
import { useDispatch } from "react-redux";
import { rouletteActions } from "../redux/actions/rouletteActions";
import { RouletteNumber } from "../utils/board";

interface IBoardNumber {
  rouletteNumber: RouletteNumber;
}
export const BoardNumber = ({ rouletteNumber }: IBoardNumber) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(rouletteActions.addHistoryItem(rouletteNumber));
  };

  return (
    <div
      className={`board-numbers-number ${rouletteNumber.color}-background-number center-content`}
      onClick={handleClick}
    >
      {rouletteNumber.number}
    </div>
  );
};

import React from "react";
import { betSize } from "../utils/bet";
import { useSelector } from "react-redux";
import { IBetInformationState } from "../redux/reducers/betInformationReducer";
import { RootState } from "../redux/reducers";

export const BetCounter = () => {
  const { round }: IBetInformationState = useSelector(
    (state: RootState) => state.betInformation
  );
  return (
    <div className="bet-section-item-center">
      Round: {round}/{betSize.length}
    </div>
  );
};

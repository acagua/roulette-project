/// <reference types="vite-plugin-svgr/client" />

import useEffect from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { IBetInformationState } from "../redux/reducers/betInformationReducer";
import "../styles/BetInformation.scss";
import { BetAmountFormatted } from "./BetAmountFormatted";
import { BetCounter } from "./BetCounter";
import { Button } from "./Button";
import { betInformationActions } from "../redux/actions/betInformationActions";
import { ReactComponent as LockIcon } from "../assets/lock.svg";
import { rouletteActions } from "../redux/actions/rouletteActions";
import lockGif from "../assets/lock-animated.gif";
import { IRouletteState } from "../redux/reducers/rouletteReducer";
import { BetNoLandingsCounter } from "./BetNoLandingsCounter";
import { getBetProfit } from "../utils/bet";

export const BetInformation = () => {
  const {
    betInPlace,
    betAmount,
    totalBet,
    totalProfit,
    round,
  }: IBetInformationState = useSelector(
    (state: RootState) => state.betInformation
  );

  const { zoneCounter }: IRouletteState = useSelector(
    (state: RootState) => state.roulette
  );

  const roundsWithoutLanding = zoneCounter.reduce(
    (max, zone) => (zone.counter > max ? zone.counter : max),
    0
  );

  const roundProfit = getBetProfit(round);
  return (
    <section className="bet-section">
      <Button
        name={betInPlace ? "" : "Bet"}
        columns={2}
        actions={[betInformationActions.placeBet()]}
        disabled={betInPlace}
        Icon={betInPlace ? LockIcon : null}
        colorType="ok"
      />
      <BetNoLandingsCounter noLandings={roundsWithoutLanding} />
      <BetAmountFormatted label="Profit" amount={totalProfit} />
      <BetAmountFormatted label="Bet" amount={betAmount} />
      <BetAmountFormatted label="Round profit" amount={roundProfit} />
      <BetAmountFormatted label="Total bet" amount={totalBet} />
      <BetCounter />
      <Button
        name="Reset all"
        columns={2}
        actions={[betInformationActions.cleanAll(), rouletteActions.cleanAll()]}
        disabled={false}
        colorType="warning"
      />
    </section>
  );
};

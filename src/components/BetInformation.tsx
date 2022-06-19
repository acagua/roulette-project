import React from "react";
import useEffect from "react";
import "../styles/BetInformation.scss";
import { BetAmountFormatted } from "./BetAmountFormatted";
import { BetCounter } from "./BetCounter";
import { Button } from "./Button";

export const BetInformation = () => {
  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  return (
    <section className="bet-section">
      {/* <Button columns={2} name="Bet" action={"TEST"} /> */}
      <div>BUTTON</div>
      <BetAmountFormatted label="Next bet" amount={5000} />
      <BetAmountFormatted label="Winning profit" amount={10000} />
      <BetAmountFormatted label="Total bet" amount={15000} />
      <BetAmountFormatted label="Earnings" amount={50000} />
      <div> Bet Zone no landings: 5 </div>
      <BetCounter />
      {/* <Button name="Clean" action={} /> */}
      <div>BUTTON</div>
    </section>
  );
};

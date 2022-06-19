import React from "react";
import { BetInformation } from "./BetInformation";
import { Board } from "./Board";
import { History } from "./History";

export const Roulette = () => {
  return (
    <>
      {/* <h1 className="title">Roulette Project</h1> */}
      <main className="main">
        <History />

        <Board />

        <BetInformation />
      </main>
    </>
  );
};

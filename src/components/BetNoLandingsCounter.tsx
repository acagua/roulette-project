import React from "react";

interface IBetNoLandingCounter {
  noLandings: number;
}
export const BetNoLandingsCounter = ({ noLandings }: IBetNoLandingCounter) => {
  let style = "green-number";
  if (noLandings <= 4) {
    style = "orange-number";
  }
  if (noLandings <= 2) {
    style = "red-number";
  }

  return (
    <div className={`${style} bet-section-item-center bold-text`}>
      {noLandings} turns w/o landing
    </div>
  );
};

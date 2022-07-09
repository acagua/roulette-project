import { useDispatch, useSelector } from "react-redux";
import { rouletteActions } from "../redux/actions/rouletteActions";
import { RootState } from "../redux/reducers";
import { IZone } from "../redux/reducers/rouletteReducer";
import { ISettingsState } from "../redux/reducers/settingsReducer";
import { betSize, BetType } from "../utils/bet";
import { getHighlightStyle, ZoneTypes } from "../utils/board";
import { BetAmountFormatted } from "./BetAmountFormatted";

interface BetZoneProps {
  zone: IZone;
  betType: BetType;
}

export const BetZone = ({ zone, betType }: BetZoneProps) => {
  const dispatch = useDispatch();

  const { numberBaseAmount, zoneBaseAmount }: ISettingsState = useSelector(
    (state: RootState) => state.settings
  );

  const handleLockZone = () => {
    dispatch(rouletteActions.lockBetZone(zone));
  };

  const multiplier =
    betSize.find((bet) => bet.round === zone.round && betType === bet.type)
      ?.multiplier || 0;

  const baseAmount =
    zone.type === ZoneTypes.LINE ? numberBaseAmount : zoneBaseAmount;

  const betAmount = baseAmount * multiplier;

  const highlightStyle = getHighlightStyle(zone.locked, zone.counter, betType);

  return (
    <div
      className={`board-zone-border center-content ${highlightStyle}`}
      onDoubleClick={handleLockZone}
    >
      {/* <div>{zone.name}</div> */}
      <div>{`${zone.name} ${zone.counter}`}</div>
      <BetAmountFormatted label="" amount={betAmount} />
    </div>
  );
};

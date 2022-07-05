import { useDispatch } from "react-redux";
import { rouletteActions } from '../redux/actions/rouletteActions';
import { IZone } from "../redux/reducers/rouletteReducer";
import { betSize, BetType } from "../utils/bet";
import { getHighlightStyle } from "../utils/board";
import { BetAmountFormatted } from "./BetAmountFormatted";

interface BetZoneProps {
  zone: IZone
  betType: BetType
}

export const BetZone = ({
  zone,
  betType
}: BetZoneProps) => {
  const dispatch = useDispatch();

  const handleLockZone = ()=>{
    dispatch(rouletteActions.lockBetZone(zone))
  }
  const amount = betSize.find(bet=> (bet.round === zone.round && betType === bet.type) )?.amount||0;

  const highlightStyle = getHighlightStyle(zone.locked, zone.counter, betType );

  return (
    <div className={`board-zone-border no-select center-content ${highlightStyle}`} onDoubleClick={handleLockZone} >
      {/* <div>{zone.name}</div> */}
      <div>{`${zone.name} ${zone.counter}`}</div>
      <BetAmountFormatted label="" amount={amount} />
    </div>
  );
};

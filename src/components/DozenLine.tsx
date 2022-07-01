import { useDispatch } from "react-redux";
import { rouletteActions } from '../redux/actions/rouletteActions';
import { IZone } from "../redux/reducers/rouletteReducer";
import { betSize } from "../utils/bet";
import { BetAmountFormatted } from "./BetAmountFormatted";

interface DozenLineProps {
  zone: IZone
}

export const DozenLine = ({
  zone
}: DozenLineProps) => {
  const dispatch = useDispatch();

  const handleLockZone = ()=>{
    dispatch(rouletteActions.lockBetZone(zone))
  }
  const amount = betSize.find(bet=> bet.round === zone.round)?.amount||0;

  let highlightStyle = 'conservative-bet-zone';
  if (zone.counter <= 5) highlightStyle = 'medium-bet-zone';
  if (zone.counter <= 3) highlightStyle = 'risky-bet-zone';

  if(zone.locked) highlightStyle = 'locked-bet-zone';
  
  return (
    <div className={`board-dozens-dozen center-content ${highlightStyle}`} onDoubleClick={handleLockZone} >
      <div>{zone.name}</div>
      <div>({zone.counter})</div>
      <BetAmountFormatted label="" amount={amount} />
    </div>
  );
};

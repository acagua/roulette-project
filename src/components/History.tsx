/// <reference types="vite-plugin-svgr/client" />

import "../styles/History.scss";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { IRouletteState } from "../redux/reducers/rouletteReducer";
import { rouletteActions } from "../redux/actions/rouletteActions";
import { Button } from "./Button";
import { ReactComponent as TrashIcon } from "../assets/trash.svg";

export const History = () => {
  const { history }: IRouletteState = useSelector(
    (state: RootState) => state.roulette
  );
  return (
    <section className="history">
      <div className="black-number" key="recent">
        History
      </div>
      <ul className="history-list">
        {history.map(({ numberInfo, id }) => (
          <li className={`${numberInfo.color}-number`} key={id}>
            {numberInfo.number}
          </li>
        ))}
        <li className="black-number" key="recent">
          End
        </li>
      </ul>
      {history.length && (
        <Button
          Icon={TrashIcon}
          action={rouletteActions.removeLastHistoryItem()}
        />
      )}
    </section>
  );
};

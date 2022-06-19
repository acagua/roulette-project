import "../styles/History.scss";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { IRouletteState } from "../redux/reducers/rouletteReducer";

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
      <div>BUTTON</div>
      {/* <Button name={"Remove"} action={rouletteTypes.REMOVE_LAST_HISTORY_ITEM} /> */}
    </section>
  );
};

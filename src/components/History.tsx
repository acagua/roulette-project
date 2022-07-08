/// <reference types="vite-plugin-svgr/client" />

import "../styles/History.scss";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { IRouletteState } from "../redux/reducers/rouletteReducer";
import { rouletteActions } from "../redux/actions/rouletteActions";
import { Button } from "./Button";
import { ReactComponent as TrashIcon } from "../assets/trash.svg";
import { ReactComponent as PaperPlaneIcon } from "../assets/paperplane.svg";
import emailjs from "@emailjs/browser";
import { colorMapper } from "../utils/board";
import { useRef, useState } from "react";

export const History = () => {
  const { history }: IRouletteState = useSelector(
    (state: RootState) => state.roulette
  );
  const historyRef = useRef<any>();
  const [listSent, setListSent] = useState(false)
  const handleSendHistory = () => {
    emailjs
      .sendForm(
        'service_nvgy92v',
        'template_ofekvit',
        historyRef.current,
        'I7PpmH1IY0IFtZVla',
      )
      .then(
        () => {
          alert("List Sent!");
          setListSent(true);
        },
        () => {
          alert("Error....");
        }
      );
  };

  return (
    <section className="history">
       <form ref={historyRef} id="form" hidden>
          <label htmlFor="list">Values</label>
          <input id="list" type="text" name="message" value={JSON.stringify(history.reverse().map(number=>number.numberInfo.number))} onChange={()=>{}}/>
        </form>
      <div className="black-number" key="recent">
        Hit
      </div>
      <ul className="history-list">
        {history.map(({ numberInfo, id }) => (
          <li className={`${colorMapper[numberInfo.redBlack]}-number`} key={id}>
            {numberInfo.number}
          </li>
        ))}
        <li className="black-number" key="recent">
          End
        </li>
      </ul>

      <Button
        Icon={TrashIcon}
        actions={[rouletteActions.removeLastHistoryItem()]}
        disabled={history.length === 0}
        colorType="warning"
      />

      <button
        className={`ok-button`}
        onDoubleClick={handleSendHistory}
        disabled={(listSent || history.length < 30)}
      >
        <PaperPlaneIcon fill="white" />
      </button>
    </section>
  );
};

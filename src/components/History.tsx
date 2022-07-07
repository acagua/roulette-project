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
import { useRef } from "react";

export const History = () => {
  const { history }: IRouletteState = useSelector(
    (state: RootState) => state.roulette
  );
  const historyList = useRef();

  const handleSendHistory = (e) => {
    // e.preventDefault(); // Prevents default refresh by the browser
    // emailjs
    //   .sendForm(
    //     import.meta.env.EMAILJS_SERVICE_ID,
    //     import.meta.env.EMAILJS_TEMPLATE_ID,
    //     historyList.current,
    //     import.meta.env.EMAILJS_PUBLIC_KEY
    //   )
    //   .then(
    //     (result) => {
    //       alert("Message Sent, We will get back to you shortly");
    //       console.log("YAAAAS");
    //     },
    //     (error) => {
    //       alert("An error occurred, Please try again");
    //       console.log("FAAAAAAK");
    //     }
    //   );
  };

  return (
    <section className="history">
      <div className="black-number" key="recent">
        Hit
      </div>
      <form ref={historyList} className="history-list">
        {history.map(({ numberInfo, id }) => (
          <li className={`${colorMapper[numberInfo.redBlack]}-number`} key={id}>
            {numberInfo.number}
          </li>
        ))}
        <li className="black-number" key="recent">
          End
        </li>
      </form>

      <Button
        Icon={TrashIcon}
        actions={[rouletteActions.removeLastHistoryItem()]}
        disabled={history.length === 0}
        colorType="warning"
      />

      <button
        className={`ok-button`}
        onDoubleClick={handleSendHistory}
        disabled={history.length < 30}
      >
        <PaperPlaneIcon fill="white" />
      </button>
    </section>
  );
};

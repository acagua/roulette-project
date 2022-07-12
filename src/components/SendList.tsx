import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { IRouletteState } from "../redux/reducers/rouletteReducer";
import { ReactComponent as PaperPlaneIcon } from "../assets/paperplane.svg";
import emailjs from "@emailjs/browser";

export const SendList = () => {
  const { history }: IRouletteState = useSelector(
    (state: RootState) => state.roulette
  );
  const historyRef = useRef<any>();
  const [listSent, setListSent] = useState(false);
  const handleSendHistory = () => {
    emailjs
      .sendForm(
        "service_nvgy92v",
        "template_ofekvit",
        historyRef.current,
        "I7PpmH1IY0IFtZVla"
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
    <>
      <form ref={historyRef} id="form" hidden>
        <label htmlFor="list">Values</label>
        <input
          id="list"
          type="text"
          name="message"
          value={JSON.stringify(
            history.map((number) => number.numberInfo.number)
          )}
        />
      </form>

      <button
        className={`ok-button settings-button`}
        onDoubleClick={handleSendHistory}
        disabled={listSent || history.length < 30}
      >
        <PaperPlaneIcon fill="white" />
      </button>
    </>
  );
};

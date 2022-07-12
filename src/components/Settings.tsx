import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { ISettingsState } from "../redux/reducers/settingsReducer";
import { settingsActions } from "../redux/actions/settingsActions";
import { ColorPicker } from "./ColorPicker";
import { SendList } from "./SendList";
import "../styles/Settings.scss";

Modal.setAppElement("#root");

export const Settings = () => {
  const dispatch = useDispatch();
  const { visible, zoneBaseAmount, numberBaseAmount }: ISettingsState =
    useSelector((state: RootState) => state.settings);

  const handleOnClose = () => {
    dispatch(settingsActions.changeVisibility());
  };

  const handleZoneBaseChange = ({ target }: any) => {
    dispatch(settingsActions.changeZoneBaseAmount(target.value));
  };
  const handleNumberBaseChange = ({ target }: any) => {
    dispatch(settingsActions.changeNumberBaseAmount(target.value));
  };

  if (!visible) return null;

  return (
    <Modal
      isOpen={visible}
      onRequestClose={handleOnClose}
      contentLabel="My dialog"
    >
      <div className="settings">
        <div className="close-modal no-select" onClick={handleOnClose}>
          X
        </div>

        <label htmlFor="color-picker">Background Color</label>

        <ColorPicker />

        <label htmlFor="zone-amount">Zone Base Bet:</label>
        <input
          id="zone-amount"
          type="number"
          name="zone-amount"
          value={zoneBaseAmount}
          onChange={handleZoneBaseChange}
        />
        <label htmlFor="number-amount">Number Base Bet:</label>
        <input
          id="number-amount"
          type="number"
          name="number-amount"
          value={numberBaseAmount}
          onChange={handleNumberBaseChange}
        />
      </div>
      <SendList />
    </Modal>
  );
};

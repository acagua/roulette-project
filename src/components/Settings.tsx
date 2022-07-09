import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { ISettingsState } from "../redux/reducers/settingsReducer";
import { settingsActions } from "../redux/actions/settingsActions";
import { ColorPicker } from "./ColorPicker";

Modal.setAppElement("#root");

export const Settings = () => {
  const dispatch = useDispatch();
  const { visible }: ISettingsState = useSelector(
    (state: RootState) => state.settings
  );

  if (!visible) return null;

  return (
    <Modal
      isOpen={visible}
      onRequestClose={() => {
        dispatch(settingsActions.changeVisibility());
      }}
      contentLabel="My dialog"
    >
      <h2>Settings</h2>

      <ColorPicker />

      <button
        onClick={() => {
          dispatch(settingsActions.changeVisibility());
        }}
      >
        Close modal
      </button>
    </Modal>
  );
};

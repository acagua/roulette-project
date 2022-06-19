import React from "react";

interface ModalInterface {
  historyNumber: number;
}

export const Modal = ({ historyNumber }: ModalInterface) => {
  //TODO HANDLE BUTTONS
  return (
    <div>
      <h1>Confirmation</h1>
      <p>Are you sure you want to delete {historyNumber} from history?</p>
      <button>Confirm</button>
      <button>Cancel</button>
    </div>
  );
};

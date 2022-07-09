import { Color } from "react-color";
import settingsTypes from "../types/settingsTypes";

const changeVisibility = () => ({
  type: settingsTypes.CHANGE_VISIBILITY,
});

const changeBackgroundColor = (color: string) => ({
  type: settingsTypes.CHANGE_BACKGROUND_COLOR,
  payload: color,
});

const changeNumberBaseAmount = (baseAmount: number) => ({
  type: settingsTypes.CHANGE_NUMBER_BASE_AMOUNT,
  payload: baseAmount,
});

const changeZoneBaseAmount = (baseAmount: number) => ({
  type: settingsTypes.CHANGE_ZONE_BASE_AMOUNT,
  payload: baseAmount,
});

const cleanAll = () => ({
  type: settingsTypes.RESET_TO_DEFAULT,
});

export const settingsActions = {
  changeVisibility,
  changeZoneBaseAmount,
  changeNumberBaseAmount,
  changeBackgroundColor,
  cleanAll,
};

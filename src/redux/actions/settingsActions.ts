
import settingsTypes from '../types/settingsTypes';

const changeVisibility = () => ({
  type: settingsTypes.CHANGE_VISIBILITY,
});

const changeBackgroundColor = (color: string) => ({
  type: settingsTypes.CHANGE_BACKGROUND_COLOR,
  payload: color
});

const changeNumberBaseAmount = (amount: number) => ({
  type: settingsTypes.CHANGE_NUMBER_BASE_AMOUNT,
  payload: amount
});

const changeZoneBaseAmount = (amount: number) => ({
  type: settingsTypes.CHANGE_ZONE_BASE_AMOUNT,
  payload: amount
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

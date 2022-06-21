import { betInformationTypes } from "../types/betInformationTypes";

export const cleanAll = () => ({
  type: betInformationTypes.CLEAN_ALL,
});

export const placeBet = () => ({
  type: betInformationTypes.PLACE_BET,
});

export const betWon = () => ({
  type: betInformationTypes.BET_WON,
});

export const betLost = () => ({
  type: betInformationTypes.BET_LOST,
});

export const betInformationActions = {
  cleanAll,
  placeBet,
  betWon,
  betLost,
};

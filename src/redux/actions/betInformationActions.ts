import { betInformationTypes } from "../types/betInformationTypes";
import rouletteTypes from "../types/rouletteTypes";

export const getNextBetZone = () => ({
  type: rouletteTypes.SET_BET_ZONE,
});

export const removeLastHistoryItem = () => ({
  type: rouletteTypes.REMOVE_LAST_HISTORY_ITEM,
});

export const cleanAll = () => ({
  type: rouletteTypes.CLEAN_ALL,
});

export const placeBet = () => ({
  type: betInformationTypes.PLACE_BET,
});

export const addHistoryItem = () => ({
  type: rouletteTypes.ADD_HISTORY_ITEM,
});

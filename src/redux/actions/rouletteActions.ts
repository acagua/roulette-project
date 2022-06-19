import rouletteTypes from "../types/rouletteTypes";
import { RouletteNumber } from "../../utils/board";

const getNextBetZone = () => ({
  type: rouletteTypes.SET_BET_ZONE,
});

const removeLastHistoryItem = () => ({
  type: rouletteTypes.REMOVE_LAST_HISTORY_ITEM,
});

const cleanAll = () => ({
  type: rouletteTypes.CLEAN_ALL,
});

const addHistoryItem = (number: RouletteNumber) => ({
  type: rouletteTypes.ADD_HISTORY_ITEM,
  payload: number,
});

export const rouletteActions = {
  addHistoryItem,
  removeLastHistoryItem,
  getNextBetZone,
  cleanAll,
};

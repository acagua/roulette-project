import rouletteTypes from "../types/rouletteTypes";
import { RouletteNumber, zoneTypes } from '../../utils/board';
import { IZone } from "../reducers/rouletteReducer";

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

const lockBetZone = (zone:IZone) => ({
  type: rouletteTypes.LOCK_BET_ZONE,
  payload: zone,
});

export const rouletteActions = {
  addHistoryItem,
  removeLastHistoryItem,
  getNextBetZone,
  lockBetZone,
  cleanAll,
};

// TYPES
import {
  RouletteNumber,
  dozensEnum,
  linesEnum,
  zoneTypes,
} from "../../utils/board";
import rouletteTypes from "../types/rouletteTypes";

interface IHistory {
  id: number;
  numberInfo: RouletteNumber;
}

export interface IZone {
  id: dozensEnum | linesEnum;
  // name: string,
  type: zoneTypes;
  counter: number;
}

export interface IRouletteState {
  historyId: number;
  history: IHistory[];
  betRound: number; //TODO betSize type?
  zoneCounter: IZone[];
}

// INITIAL STATE
const initialState: IRouletteState = {
  historyId: 0,
  history: [],
  betRound: 0,
  zoneCounter: [
    { id: dozensEnum.FIRST_DOZEN, type: zoneTypes.DOZEN, counter: 0 },
    { id: dozensEnum.SECOND_DOZEN, type: zoneTypes.DOZEN, counter: 0 },
    { id: dozensEnum.THIRD_DOZEN, type: zoneTypes.DOZEN, counter: 0 },
    { id: linesEnum.FIRST_LINE, type: zoneTypes.LINE, counter: 0 },
    { id: linesEnum.SECOND_LINE, type: zoneTypes.LINE, counter: 0 },
    { id: linesEnum.THIRD_LINE, type: zoneTypes.LINE, counter: 0 },
  ],
};

// REDUCER
export const rouletteReducer = (
  state: IRouletteState = initialState,
  action: any
) => {
  switch (action.type) {
    case rouletteTypes.ADD_HISTORY_ITEM: {
      return {
        ...state,
        historyId: state.historyId + 1,
        history: [
          { id: state.historyId, numberInfo: action.payload },
          ...state.history,
        ],
        zoneCounter: state.zoneCounter.map((zone) => ({
          ...zone,
          counter:
            (zone.type === zoneTypes.LINE && action.payload.line === zone.id) ||
            (zone.type === zoneTypes.DOZEN && action.payload.dozen === zone.id)
              ? 0
              : zone.counter + 1,
        })),
      };
    }
    case rouletteTypes.REMOVE_LAST_HISTORY_ITEM: {
      const newHistory = state.history.slice(1);
      let newZoneCounter = initialState.zoneCounter;
      newHistory.reverse().map((item) => {
        newZoneCounter = newZoneCounter.map((zone) => ({
          ...zone,
          counter:
            (zone.type === zoneTypes.LINE &&
              item.numberInfo.line === zone.id) ||
            (zone.type === zoneTypes.DOZEN && item.numberInfo.dozen === zone.id)
              ? 0
              : zone.counter + 1,
        }));
      });
      return {
        ...state,
        history: newHistory,
        zoneCounter: newZoneCounter,
      };
    }
    case rouletteTypes.CLEAN_ALL: {
      return initialState;
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

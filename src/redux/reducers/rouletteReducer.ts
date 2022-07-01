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
  name: string;
  type: zoneTypes;
  counter: number;
  round: number;
  locked: boolean;
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
    {
      id: dozensEnum.FIRST_DOZEN,
      name: "1st 12",
      type: zoneTypes.DOZEN,
      counter: 0,
      round: 0,
      locked: false,
    },
    {
      id: dozensEnum.SECOND_DOZEN,
      name: "2nd 12",
      type: zoneTypes.DOZEN,
      counter: 0,
      round: 0,
      locked: false,
    },
    {
      id: dozensEnum.THIRD_DOZEN,
      name: "3rd 12",
      type: zoneTypes.DOZEN,
      counter: 0,
      round: 0,
      locked: false,
    },
    {
      id: linesEnum.FIRST_LINE,
      name: "2 to 1",
      type: zoneTypes.LINE,
      counter: 0,
      round: 0,
      locked: false,
    },
    {
      id: linesEnum.SECOND_LINE,
      name: "2 to 1",
      type: zoneTypes.LINE,
      counter: 0,
      round: 0,
      locked: false,
    },
    {
      id: linesEnum.THIRD_LINE,
      name: "2 to 1",
      type: zoneTypes.LINE,
      counter: 0,
      round: 0,
      locked: false,
    },
  ],
};

// REDUCER
export const rouletteReducer = (
  state: IRouletteState = initialState,
  action: any
) => {
  switch (action.type) {
    case rouletteTypes.ADD_HISTORY_ITEM: {
      const hit = (zone: IZone) =>
        (zone.type === zoneTypes.LINE && action.payload.line === zone.id) ||
        (zone.type === zoneTypes.DOZEN && action.payload.dozen === zone.id);

      const round = (zone: IZone) => {
        if (!zone.locked) return zone.round;
        return hit(zone) ? 0 : ++zone.round;
      };
      return {
        ...state,
        historyId: state.historyId + 1,
        history: [
          { id: state.historyId, numberInfo: action.payload },
          ...state.history,
        ],
        zoneCounter: state.zoneCounter.map((zone) => ({
          ...zone,
          counter: hit(zone) ? 0 : zone.counter + 1,
          round: round(zone),
          locked: zone.locked && hit(zone) ? false : zone.locked,
        })),
      };
    }
    case rouletteTypes.REMOVE_LAST_HISTORY_ITEM: {
      const newHistory = state.history.slice(1);
      let newZoneCounter = initialState.zoneCounter;
      newHistory.map((item) => {
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
    case rouletteTypes.LOCK_BET_ZONE: {
      return {
        ...state,
        zoneCounter: state.zoneCounter.map((zone) => ({
          ...zone,
          locked:
            action.payload.id === zone.id && action.payload.type === zone.type
              ? true
              : zone.locked,
          round:
            action.payload.id === zone.id && action.payload.type === zone.type
              ? 1
              : zone.round,
        })),
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

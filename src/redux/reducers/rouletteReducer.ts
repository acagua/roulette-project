// TYPES
import {
  RouletteNumber,
  DozensEnum,
  ColumnsEnum,
  ZoneTypes,
  LowHighEnum,
  EvenOddEnum,
  RedBlackEnum,
  initialZones
} from "../../utils/board";
import rouletteTypes from "../types/rouletteTypes";
import { LineEnum } from '../../utils/board';

interface IHistory {
  id: number;
  numberInfo: RouletteNumber;
}

export interface IZone {
  id: DozensEnum | ColumnsEnum | LowHighEnum | EvenOddEnum | RedBlackEnum | LineEnum | number;
  name: string;
  type: ZoneTypes;
  counter: number;
  round: number;
  locked: boolean;
}

export interface IRouletteState {
  historyId: number;
  history: IHistory[];
  zones: IZone[];
}

// INITIAL STATE
const initialState: IRouletteState = {
  historyId: 0,
  history: [],
  zones: initialZones,
};
const round = (zone: IZone, payload: RouletteNumber) => {
  if (!zone.locked) return zone.round;
  return hit(zone, payload) ? 0 : ++zone.round;
};

const hit = (zone: IZone, payload: RouletteNumber) =>{
  return (zone.type === ZoneTypes.COLUMN && payload.column === zone.id) ||
   (zone.type === ZoneTypes.DOZEN && payload.dozen === zone.id) ||
   (zone.type === ZoneTypes.EVEN_ODD && payload.evenOdd === zone.id) ||
   (zone.type === ZoneTypes.RED_BLACK && payload.redBlack === zone.id) ||
   (zone.type === ZoneTypes.LOW_HIGH && payload.lowHigh === zone.id) ||
   (zone.type === ZoneTypes.LINE && payload.line.includes(zone.id));
 }

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
        zones: state.zones.map((zone) => ({
          ...zone,
          counter: hit(zone, action.payload) ? 0 : zone.counter + 1,
          round: round(zone, action.payload),
          locked: zone.locked && hit(zone, action.payload) ? false : zone.locked,
        })),
      };
    }
    case rouletteTypes.REMOVE_LAST_HISTORY_ITEM: {
      const newHistory = state.history.slice(1).reverse();
      let newzones = initialState.zones;
      newHistory.map((item) => {
        newzones = newzones.map((zone) => ({
          ...zone,
          counter:
            hit(zone,item.numberInfo) ? 0 : zone.counter + 1,
        }));
      });
      return {
        ...state,
        history: newHistory.reverse(),
        zones: newzones,
      };
    }
    case rouletteTypes.LOCK_BET_ZONE: {
      return {
        ...state,
        zones: state.zones.map((zone) => ({
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

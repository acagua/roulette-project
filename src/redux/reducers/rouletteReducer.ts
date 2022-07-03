// TYPES
import {
  RouletteNumber,
  DozensEnum,
  ColumnsEnum,
  ZoneTypes,
  LowHighEnum,
  EvenOddEnum,
  RedBlackEnum
} from "../../utils/board";
import rouletteTypes from "../types/rouletteTypes";

interface IHistory {
  id: number;
  numberInfo: RouletteNumber;
}

export interface IZone {
  id: DozensEnum | ColumnsEnum | LowHighEnum | EvenOddEnum | RedBlackEnum;
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
  zones: [
    {
      id: DozensEnum.FIRST_DOZEN,
      name: "1st 12",
      type: ZoneTypes.DOZEN,
      counter: 0,
      round: 0,
      locked: false,
    },
    {
      id: DozensEnum.SECOND_DOZEN,
      name: "2nd 12",
      type: ZoneTypes.DOZEN,
      counter: 0,
      round: 0,
      locked: false,
    },
    {
      id: DozensEnum.THIRD_DOZEN,
      name: "3rd 12",
      type: ZoneTypes.DOZEN,
      counter: 0,
      round: 0,
      locked: false,
    },
    {
      id: ColumnsEnum.FIRST_COLUMN,
      name: "2 to 1",
      type: ZoneTypes.COLUMN,
      counter: 0,
      round: 0,
      locked: false,
    },
    {
      id: ColumnsEnum.SECOND_COLUMN,
      name: "2 to 1",
      type: ZoneTypes.COLUMN,
      counter: 0,
      round: 0,
      locked: false,
    },
    {
      id: ColumnsEnum.THIRD_COLUMN,
      name: "2 to 1",
      type: ZoneTypes.COLUMN,
      counter: 0,
      round: 0,
      locked: false,
    },
    {
      id: LowHighEnum.LOW,
      name: "1-18",
      type: ZoneTypes.LOW_HIGH,
      counter: 0,
      round: 0,
      locked: false,
    },
    {
      id: EvenOddEnum.EVEN,
      name: "Even",
      type: ZoneTypes.EVEN_ODD,
      counter: 0,
      round: 0,
      locked: false,
    },
    {
      id: RedBlackEnum.RED,
      name: "Red",
      type: ZoneTypes.RED_BLACK,
      counter: 0,
      round: 0,
      locked: false,
    },
    {
      id: RedBlackEnum.BLACK,
      name: "Black",
      type: ZoneTypes.RED_BLACK,
      counter: 0,
      round: 0,
      locked: false,
    },
    {
      id: EvenOddEnum.ODD,
      name: "Odd",
      type: ZoneTypes.EVEN_ODD,
      counter: 0,
      round: 0,
      locked: false,
    },
    {
      id: LowHighEnum.HIGH,
      name: "19-36",
      type: ZoneTypes.LOW_HIGH,
      counter: 0,
      round: 0,
      locked: false,
    },
  ],
};

const hit = (zone: IZone, payload: RouletteNumber) =>{
  return (zone.type === ZoneTypes.COLUMN && payload.column === zone.id) ||
   (zone.type === ZoneTypes.DOZEN && payload.dozen === zone.id) ||
   (zone.type === ZoneTypes.EVEN_ODD && payload.evenOdd === zone.id) ||
   (zone.type === ZoneTypes.RED_BLACK && payload.redBlack === zone.id) ||
   (zone.type === ZoneTypes.LOW_HIGH && payload.lowHigh === zone.id);
 }

// REDUCER
export const rouletteReducer = (
  state: IRouletteState = initialState,
  action: any
) => {
  switch (action.type) {
    case rouletteTypes.ADD_HISTORY_ITEM: {

      const round = (zone: IZone) => {
        if (!zone.locked) return zone.round;
        return hit(zone, action.payload) ? 0 : ++zone.round;
      };
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
          round: round(zone),
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

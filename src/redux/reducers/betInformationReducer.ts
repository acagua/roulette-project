import {
  baseBet,
  betSize,
  getBetProfit,
  getCumulativeBet,
} from "../../utils/bet";
import { betInformationTypes } from "../types/betInformationTypes";
import { getBetAmount } from "../../utils/bet";

export interface IBetInformationState {
  betInPlace: boolean;
  betAmount: number;
  totalBet: number;
  totalProfit: number;
  round: number;
}

// INITIAL STATE
const initialState: IBetInformationState = {
  betInPlace: false,
  betAmount: baseBet,
  totalBet: 0,
  totalProfit: 0,
  round: 1,
};

// REDUCER
const betInformationReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case betInformationTypes.PLACE_BET: {
      return {
        ...state,
        betInPlace: true,
      };
    }
    case betInformationTypes.BET_WON: {
      return {
        ...initialState,
        totalProfit: state.totalProfit + getBetProfit(state.round),
      };
    }
    case betInformationTypes.BET_LOST: {
      return {
        ...state,
        // betInPlace: false, // Cuando se arranca no hay vuelta atrás
        totalBet: getCumulativeBet(state.round),
        betAmount: getBetAmount(state.round),
        round: state.round + 1,
      };
    }
    case betInformationTypes.CLEAN_ALL: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default betInformationReducer;

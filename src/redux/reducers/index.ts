// libraries
import { combineReducers } from "redux";

// reducers
import { rouletteReducer } from "./rouletteReducer";
import betInformationReducer from "./betInformationReducer";

// MIXING REDUCERS
const reducers = combineReducers({
  roulette: rouletteReducer,
  betInformation: betInformationReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;

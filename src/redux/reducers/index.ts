// libraries
import { combineReducers } from "redux";

// reducers
import { rouletteReducer } from "./rouletteReducer";

// MIXING REDUCERS
const reducers = combineReducers({
  roulette: rouletteReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;

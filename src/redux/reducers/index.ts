// libraries
import { combineReducers } from "redux";

// reducers
import { rouletteReducer } from "./rouletteReducer";
import { settingsReducer } from "./settingsReducer";

// MIXING REDUCERS
const reducers = combineReducers({
  roulette: rouletteReducer,
  settings: settingsReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;

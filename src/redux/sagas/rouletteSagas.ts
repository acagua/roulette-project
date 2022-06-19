import { fork, take, takeEvery } from "redux-saga/effects";
import * as rouletteActions from "../actions/rouletteActions";
import * as betInformationActions from "../actions/betInformationActions";

function* placeBet() {
  // yield take(rouletteActions.addHistoryItem);
  //TODO que pasa si cae el número?
}

const rouletteSagas = [
  takeEvery(betInformationActions.placeBet, placeBet),
  // takeEvery( rouletteActions.placeBet, placeBet ),
];

export default rouletteSagas;

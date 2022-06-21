import { fork, put, race, select, take, takeEvery } from "redux-saga/effects";
import { rouletteActions } from "../actions/rouletteActions";
import { betInformationActions } from "../actions/betInformationActions";
import { getMaxZone } from "../../utils/getMaxZone";
import { getRoulette } from "./selectors";
import { zoneTypes, dozensEnum } from "../../utils/board";
import { betInformationTypes } from "../types/betInformationTypes";
import rouletteTypes from "../types/rouletteTypes";

function* placeBet() {
  console.log("listening for number result");
  const { zoneCounter } = yield select(getRoulette);
  const betZone = getMaxZone(zoneCounter);

  const { addItemAction, cancel } = yield race({
    addItemAction: take(rouletteTypes.ADD_HISTORY_ITEM),
    cancel: take(betInformationTypes.CLEAN_ALL),
  });

  if (cancel) return;

  const { line, dozen } = addItemAction.payload;
  if (
    (betZone.type === zoneTypes.DOZEN && dozen === betZone.id) ||
    (betZone.type === zoneTypes.LINE && line === betZone.id)
  ) {
    yield put(betInformationActions.betWon());
  } else {
    yield put(betInformationActions.betLost());
    yield put(betInformationActions.placeBet());
  }
}

const rouletteSagas = [
  takeEvery(betInformationActions.placeBet().type, placeBet),
  // takeEvery( rouletteActions.placeBet, placeBet ),
];

export default rouletteSagas;

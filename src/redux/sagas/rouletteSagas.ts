import { put, race, select, take, takeEvery } from "redux-saga/effects";
import { betInformationActions } from "../actions/betInformationActions";
import { getMaxZone } from "../../utils/getMaxZone";
import { getRoulette } from "./selectors";
import { ZoneTypes } from "../../utils/board";
import { betInformationTypes } from "../types/betInformationTypes";
import rouletteTypes from "../types/rouletteTypes";

function* placeBet() {
  const { zones } = yield select(getRoulette);
  const betZone = getMaxZone(zones);

  const { addItemAction, cancel } = yield race({
    addItemAction: take(rouletteTypes.ADD_HISTORY_ITEM),
    cancel: take(betInformationTypes.CLEAN_ALL),
  });

  if (cancel) return;

  const { column, dozen } = addItemAction.payload;
  if (
    (betZone.type === ZoneTypes.DOZEN && dozen === betZone.id) ||
    (betZone.type === ZoneTypes.COLUMN && column === betZone.id)
  ) {
    yield put(betInformationActions.betWon());
  } else {
    yield put(betInformationActions.betLost());
    yield put(betInformationActions.placeBet());
  }
}

const rouletteSagas = [
  takeEvery(betInformationActions.placeBet().type, placeBet),
];

export default rouletteSagas;

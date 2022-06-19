// LIBRARIES
import { all } from "redux-saga/effects";

// SAGAS
import rouletteSagas from "./rouletteSagas";

export default function* rootSaga() {
  yield all({
    ...rouletteSagas,
  });
}

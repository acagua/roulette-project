// LIBRARIES
import { applyMiddleware } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

// REDUCERS
import reducers from "../reducers/index";

// SAGAS
import rootSaga from "../sagas";

// CONFIG
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: reducers,
  middleware: [sagaMiddleware],
  devTools: true,
});

// runing sagas
sagaMiddleware.run(rootSaga);
// initSagas( sagaMiddleware );

export default store;

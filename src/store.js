import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import {
  rootSaga,
  watchFetchDataFromOpenWeatherMap,
  watchFetchDataFromWeatherstack,
} from "./sagas/sagas";
import { composeWithDevTools } from 'redux-devtools-extension';

const saga = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk, saga))
);

saga.run(rootSaga);

export const persistor = persistStore(store);

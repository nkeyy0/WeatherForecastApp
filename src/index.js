import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

// const persistor = presistStrore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor = {persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// export default {store, persistor}

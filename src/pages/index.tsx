import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../modules";
import "./index.css";

import store from "../store/store"
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

// const store = createStore(rootReducer)
const persistor = persistStore(store);

const IndexPage = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)

export default IndexPage

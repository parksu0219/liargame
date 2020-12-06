import React from "react"
import { Provider } from "react-redux"
import store from "./src/store/store"
import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"

export default ({ element }) => {
  const persistor = persistStore(store)
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {element}
      </PersistGate>
    </Provider>
  )
}

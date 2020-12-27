import React from "react"
import { Provider } from "react-redux"
import store from "./src/store/store"
import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"
import { Helmet } from "react-helmet"

export default ({ element }) => {
  const persistor = persistStore(store)
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Helmet>
          <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
        </Helmet>
        {element}
      </PersistGate>
    </Provider>
  )
}

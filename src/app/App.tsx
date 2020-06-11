import React, { Suspense } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./store";

import GlobalStyle from "./styles";
import Router from "./routes";

const store = createStore(reducers, composeWithDevTools());

function App() {
  return (
    <Suspense fallback={() => <>Carregando...</>}>
      <Provider store={store}>
        <>
          <GlobalStyle />
          <Router />
        </>
      </Provider>
    </Suspense>
  );
}

export default App;

import React from "react";
import App from "./App";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./store";

const store = createStore(reducers, composeWithDevTools());

const AppProvider: React.FC = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppProvider;

import React from "react";
import ReactDOM from "react-dom";
import AppProvider from "./app/AppProvider";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();

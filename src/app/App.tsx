import React, { Suspense } from "react";
import { useSelector } from "react-redux";

import { Store } from "./store/types";
import { IStateStylesSettings } from "./store/reducers/stylesSettingsTypes";

import GlobalStyle from "./styles";
import Router from "./routes";

function App() {
  const style = useSelector<Store, IStateStylesSettings>(
    (state) => state.stylesSettingsReducer
  );
  return (
    <Suspense fallback={() => <>Carregando...</>}>
      <>
        <GlobalStyle background={style.settings.background} />
        <Router />
      </>
    </Suspense>
  );
}

export default App;

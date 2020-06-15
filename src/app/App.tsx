import React, { Suspense } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enUS from "./i18n/en-US";
import ptBR from "./i18n/pt-BR";

import GlobalStyle from "./styles";
import Router from "./routes";

i18n.use(initReactI18next).init({
  resources: {
    "en-US": enUS,
    "pt-BR": ptBR,
  },
  lng: window.navigator.language,
  fallbackLng: "en-US",

  interpolation: {
    escapeValue: false,
  },
});

function App() {
  return (
    <Suspense fallback={<>Carregando...</>}>
      <>
        <GlobalStyle />
        <Router />
      </>
    </Suspense>
  );
}

export default App;

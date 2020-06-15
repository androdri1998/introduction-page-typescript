import React from "react";
import { useSelector } from "react-redux";

import { Store } from "../../store/types";
import { IStateStylesSettings } from "../../store/reducers/stylesSettingsTypes";

import Header from "../../components/Header";

import { Container } from "./styles";

import { IPropsPresentation } from "./types";

const HomePresentation: React.FC<IPropsPresentation> = () => {
  const style = useSelector<Store, IStateStylesSettings>(
    (state) => state.stylesSettingsReducer
  );
  return (
    <Container background={style.settings.background}>
      <Header />
    </Container>
  );
};

export default HomePresentation;

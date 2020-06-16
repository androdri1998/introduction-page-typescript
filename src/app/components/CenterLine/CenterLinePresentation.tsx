import React from "react";
import { useSelector } from "react-redux";
import { BsChevronCompactDown } from "react-icons/bs";

import { Container, Line, ContainerIcon } from "./styles";

import { IPropsPresentation } from "./types";
import { IStateStylesSettings } from "../../store/reducers/stylesSettingsTypes";
import { Store } from "../../store/types";

const CenterLinePresentation: React.FC<IPropsPresentation> = () => {
  const style = useSelector<Store, IStateStylesSettings>(
    (state) => state.stylesSettingsReducer
  );
  return (
    <Container>
      <Line background={style.settings.lineColor} />
      <ContainerIcon color={style.settings.lineColor}>
        <BsChevronCompactDown size={100} />
      </ContainerIcon>
    </Container>
  );
};

export default CenterLinePresentation;

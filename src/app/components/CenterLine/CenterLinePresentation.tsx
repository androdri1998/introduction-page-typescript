import React from "react";
import { useSelector } from "react-redux";
import { BsChevronCompactDown } from "react-icons/bs";

import { Container, Line, ContainerIcon } from "./styles";
import { themes } from "../../utils/constants";

import { IPropsPresentation } from "./types";
import { IStateStylesSettings } from "../../store/reducers/stylesSettingsTypes";
import { Store } from "../../store/types";

const CenterLinePresentation: React.FC<IPropsPresentation> = () => {
  const style = useSelector<Store, IStateStylesSettings>(
    (state) => state.stylesSettingsReducer
  );
  return (
    <Container>
      <Line
        background={
          style.theme === themes.LIGHT
            ? style.settings.color_1
            : style.settings.color_5
        }
      />
      <ContainerIcon
        color={
          style.theme === themes.LIGHT
            ? style.settings.color_1
            : style.settings.color_5
        }
      >
        <BsChevronCompactDown size={100} />
      </ContainerIcon>
    </Container>
  );
};

export default CenterLinePresentation;

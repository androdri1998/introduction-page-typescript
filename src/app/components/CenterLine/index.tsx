import React from "react";
import { useSelector } from "react-redux";

import CenterLinePresentation from "./CenterLinePresentation";

import { IPropsContainer } from "./types";
import { IStateStylesSettings } from "../../store/reducers/stylesSettingsTypes";
import { Store } from "../../store/types";
import { themes } from "../../utils/constants";

const CenterLineContainer: React.FC<IPropsContainer> = () => {
  const style = useSelector<Store, IStateStylesSettings>(
    (state) => state.stylesSettingsReducer
  );

  return (
    <CenterLinePresentation
      color={
        style.theme === themes.LIGHT
          ? style.settings.color_1
          : style.settings.color_5
      }
    />
  );
};

export default CenterLineContainer;

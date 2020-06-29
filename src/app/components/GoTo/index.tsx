import React from "react";
import { useSelector } from "react-redux";

import GoToPresentation from "./GoToPresentation";

import { themes } from "../../utils/constants";
import { IPropsContainer } from "./types";
import { Store } from "../../store/types";
import { IStateStylesSettings } from "../../store/reducers/stylesSettingsTypes";

const GoToContainer: React.FC<IPropsContainer> = ({ to, text }) => {
  const style = useSelector<Store, IStateStylesSettings>(
    (state) => state.stylesSettingsReducer
  );
  return (
    <GoToPresentation
      to={to}
      text={text}
      colorOthersText={
        style.theme === themes.LIGHT
          ? style.settings.color_2
          : style.settings.color_1
      }
      colorIcon={
        style.theme === themes.LIGHT
          ? style.settings.color_1
          : style.settings.color_5
      }
    />
  );
};

export default GoToContainer;

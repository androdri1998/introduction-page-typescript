import React from "react";
import { useSelector } from "react-redux";

import HomePresentation from "./HomePresentation";

import { themes } from "../../utils/constants";
import { IPropsContainer } from "./types";
import { Store } from "../../store/types";
import { IStateStylesSettings } from "../../store/reducers/stylesSettingsTypes";

const HomeContainer: React.FC<IPropsContainer> = () => {
  const style = useSelector<Store, IStateStylesSettings>(
    (state) => state.stylesSettingsReducer
  );
  return (
    <HomePresentation
      backgroundColor={
        style.theme === themes.LIGHT
          ? style.settings.background_light
          : style.settings.background_dark
      }
    />
  );
};

export default HomeContainer;

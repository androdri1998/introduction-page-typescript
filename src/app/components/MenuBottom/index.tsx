import React from "react";
import { useSelector } from "react-redux";

import MenuBottomPresentation from "./MenuBottomPresentation";

import { IPropsContainer } from "./types";
import { IStateStylesSettings } from "../../store/reducers/stylesSettingsTypes";
import { Store } from "../../store/types";
import { themes } from "../../utils/constants";

const MenuBottomContainer: React.FC<IPropsContainer> = () => {
  const style = useSelector<Store, IStateStylesSettings>(
    (state) => state.stylesSettingsReducer
  );

  return (
    <MenuBottomPresentation
      backgroundColorMenu={
        style.theme === themes.LIGHT
          ? style.settings.color_15
          : style.settings.color_16
      }
      colorIcons={
        style.theme === themes.LIGHT
          ? style.settings.color_2
          : style.settings.color_6
      }
    />
  );
};

export default MenuBottomContainer;

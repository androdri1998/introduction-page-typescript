import React from "react";
import { useSelector } from "react-redux";

import NavPresentation from "./NavPresentation";

import { IPropsContainer } from "./types";
import { IStateStylesSettings } from "../../store/reducers/stylesSettingsTypes";
import { Store } from "../../store/types";
import { themes } from "../../utils/constants";

const NavContainer: React.FC<IPropsContainer> = () => {
  const style = useSelector<Store, IStateStylesSettings>(
    (state) => state.stylesSettingsReducer
  );

  return (
    <NavPresentation
      color={
        style.theme === themes.LIGHT
          ? style.settings.color_2
          : style.settings.color_6
      }
    />
  );
};

export default NavContainer;

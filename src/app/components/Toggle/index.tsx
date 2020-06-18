import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import TogglePresentation from "./TogglePresentation";

import { IPropsContainer, TTheme } from "./types";
import { IStateStylesSettings } from "../../store/reducers/stylesSettingsTypes";
import { Store } from "../../store/types";
import { updateTheme } from "../../store/reducers/stylesSettings";
import { themes } from "../../utils/constants";

const ToggleContainer: React.FC<IPropsContainer> = () => {
  const dispatch = useDispatch();
  const style = useSelector<Store, IStateStylesSettings>(
    (state) => state.stylesSettingsReducer
  );

  const [theme, setTheme] = useState<TTheme>("dark" as TTheme);

  useEffect(() => {
    setTheme(style.theme as TTheme);
  }, [style.theme]);

  function handlerSwitchTheme(theme: string) {
    const response = updateTheme(
      theme === themes.LIGHT ? themes.DARK : themes.LIGHT
    );
    dispatch(response);
  }

  return (
    <TogglePresentation
      iconColor={
        theme === themes.LIGHT ? style.settings.color_4 : style.settings.color_6
      }
      theme={theme}
      toggleBackground={
        theme === themes.LIGHT ? style.settings.color_3 : style.settings.color_5
      }
      handlerSwitchTheme={handlerSwitchTheme}
    />
  );
};

export default ToggleContainer;

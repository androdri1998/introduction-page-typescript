import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdBrightness4 } from "react-icons/md";

import {
  ToggleContainer,
  ToggleContent,
  Toggle,
  ToggleIconLight,
  ToggleIconDark,
} from "./styles";

import { IPropsPresentation, TTheme } from "./types";
import { IStateStylesSettings } from "../../store/reducers/stylesSettingsTypes";
import { themes } from "../../utils/constants";
import { Store } from "../../store/types";
import { updateTheme } from "../../store/reducers/stylesSettings";

const TogglePresentation: React.FC<IPropsPresentation> = () => {
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
    <ToggleContainer>
      <ToggleContent>
        <Toggle background={style.settings.toggle.background} theme={theme}>
          {theme === themes.LIGHT ? (
            <ToggleIconLight onClick={() => handlerSwitchTheme(theme)}>
              <MdBrightness4
                size={60}
                color={style.settings.toggle.iconColor}
              />
            </ToggleIconLight>
          ) : (
            <ToggleIconDark onClick={() => handlerSwitchTheme(theme)}>
              <MdBrightness4
                size={60}
                color={style.settings.toggle.iconColor}
              />
            </ToggleIconDark>
          )}
        </Toggle>
      </ToggleContent>
    </ToggleContainer>
  );
};

export default TogglePresentation;

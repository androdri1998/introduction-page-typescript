import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { MdBrightness4 } from "react-icons/md";

import {
  ToggleContainer,
  ToggleContent,
  Toggle,
  ToggleIconLight,
  ToggleIconDark,
} from "./styles";

import { IPropsPresentation, TTheme } from "./types";
import { Store } from "../../store/types";
import { IStateStylesSettings } from "../../store/reducers/stylesSettingsTypes";
import { themes } from "../../utils/constants";

const TogglePresentation: React.FC<IPropsPresentation> = () => {
  const style = useSelector<Store, IStateStylesSettings>(
    (state) => state.stylesSettingsReducer
  );

  const [theme, setTheme] = useState<TTheme>("dark" as TTheme);

  useEffect(() => {
    setTheme(style.theme as TTheme);
  }, [style.theme]);

  function handlerSwitchTheme(theme: string) {
    setTheme((theme === themes.LIGHT ? themes.DARK : themes.LIGHT) as TTheme);
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

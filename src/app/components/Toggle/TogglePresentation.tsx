import React from "react";
import { MdBrightness4 } from "react-icons/md";

import {
  ToggleContainer,
  ToggleContent,
  Toggle,
  ToggleIconLight,
  ToggleIconDark,
} from "./styles";

import { IPropsPresentation } from "./types";
import { themes } from "../../utils/constants";

const TogglePresentation: React.FC<IPropsPresentation> = ({
  iconColor,
  handlerSwitchTheme,
  theme,
  toggleBackground,
}) => {
  return (
    <ToggleContainer>
      <ToggleContent>
        <Toggle background={toggleBackground} theme={theme}>
          {theme === themes.LIGHT ? (
            <ToggleIconLight onClick={() => handlerSwitchTheme(theme)}>
              <MdBrightness4 size={25} color={iconColor} />
            </ToggleIconLight>
          ) : (
            <ToggleIconDark onClick={() => handlerSwitchTheme(theme)}>
              <MdBrightness4 size={25} color={iconColor} />
            </ToggleIconDark>
          )}
        </Toggle>
      </ToggleContent>
    </ToggleContainer>
  );
};

export default TogglePresentation;

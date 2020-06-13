import React from "react";
import { useSelector } from "react-redux";
import { MdBrightness4 } from "react-icons/md";

import { ToggleContainer, ToggleContent, Toggle } from "./styles";

import { IPropsPresentation } from "./types";
import { Store } from "../../store/types";
import { IStateStylesSettings } from "../../store/reducers/stylesSettingsTypes";

const TogglePresentation: React.FC<IPropsPresentation> = () => {
  const style = useSelector<Store, IStateStylesSettings>(
    (state) => state.stylesSettingsReducer
  );
  return (
    <ToggleContainer>
      <ToggleContent>
        <Toggle background={style.settings.toogleBackground}>
          <MdBrightness4 color={style.settings.toogleIconColor} />
        </Toggle>
      </ToggleContent>
    </ToggleContainer>
  );
};

export default TogglePresentation;

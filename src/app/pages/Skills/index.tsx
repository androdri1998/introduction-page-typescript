import React from "react";
import { useSelector } from "react-redux";

import SkillsPresentation from "./SkillsPresentation";

import { themes } from "../../utils/constants";
import { IPropsContainer } from "./types";
import { Store } from "../../store/types";
import { IStateStylesSettings } from "../../store/reducers/stylesSettingsTypes";

const SkillsContainer: React.FC<IPropsContainer> = () => {
  const style = useSelector<Store, IStateStylesSettings>(
    (state) => state.stylesSettingsReducer
  );
  return (
    <SkillsPresentation
      skills={[]}
      colorTitle={
        style.theme === themes.LIGHT
          ? style.settings.color_2
          : style.settings.color_6
      }
    />
  );
};

export default SkillsContainer;

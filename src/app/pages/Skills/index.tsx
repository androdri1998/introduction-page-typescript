import React from "react";
import { useSelector } from "react-redux";

import SkillsPresentation from "./SkillsPresentation";

import { themes } from "../../utils/constants";
import { IPropsContainer } from "./types";
import { Store } from "../../store/types";
import { IStateStylesSettings } from "../../store/reducers/stylesSettingsTypes";
import { content } from "../../content";

const SkillsContainer: React.FC<IPropsContainer> = () => {
  const style = useSelector<Store, IStateStylesSettings>(
    (state) => state.stylesSettingsReducer
  );
  return (
    <SkillsPresentation
      colorOthersText={
        style.theme === themes.LIGHT
          ? style.settings.color_2
          : style.settings.color_1
      }
      linkToLinkedin={content.linkToLinkedin}
      skills={content.skills}
      colorTitle={
        style.theme === themes.LIGHT
          ? style.settings.color_2
          : style.settings.color_6
      }
      colorIcon={
        style.theme === themes.LIGHT
          ? style.settings.color_1
          : style.settings.color_5
      }
    />
  );
};

export default SkillsContainer;

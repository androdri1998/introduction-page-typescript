import React from "react";
import { useSelector } from "react-redux";

import AboutMePresentation from "./AboutMePresentation";

import { themes } from "../../utils/constants";
import { IPropsContainer } from "./types";
import { Store } from "../../store/types";
import { IStateStylesSettings } from "../../store/reducers/stylesSettingsTypes";
import { content } from "../../content";

const AboutMeContainer: React.FC<IPropsContainer> = () => {
  const style = useSelector<Store, IStateStylesSettings>(
    (state) => state.stylesSettingsReducer
  );
  return (
    <AboutMePresentation
      colorTitle={
        style.theme === themes.LIGHT
          ? style.settings.color_2
          : style.settings.color_6
      }
      colorOthersText={
        style.theme === themes.LIGHT
          ? style.settings.color_2
          : style.settings.color_1
      }
      colorParagraph={
        style.theme === themes.LIGHT
          ? style.settings.color_2
          : style.settings.color_6
      }
      linkToLinkedin={content.linkToLinkedin}
      aboutMe={content.aboutMe}
    />
  );
};

export default AboutMeContainer;

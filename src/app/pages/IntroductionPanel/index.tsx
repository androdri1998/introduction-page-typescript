import React from "react";
import { useSelector } from "react-redux";

import IntroductionPanelPresentation from "./IntroductionPanelPresentation";

import { content } from "../../content";
import { themes } from "../../utils/constants";
import { IPropsContainer } from "./types";
import { Store } from "../../store/types";
import { IStateStylesSettings } from "../../store/reducers/stylesSettingsTypes";

const IntroductionPanelContainer: React.FC<IPropsContainer> = () => {
  const style = useSelector<Store, IStateStylesSettings>(
    (state) => state.stylesSettingsReducer
  );
  return (
    <IntroductionPanelPresentation
      colorOthersText={
        style.theme === themes.LIGHT
          ? style.settings.color_2
          : style.settings.color_1
      }
      colorTextName={
        style.theme === themes.LIGHT
          ? style.settings.color_2
          : style.settings.color_6
      }
      linkToLinkedin={content.linkToLinkedin}
      profilePhoto={content.linkProfilePhoto}
      firstname={content.firstname}
      lastname={content.lastname}
      colorTextPanel={
        style.theme === themes.LIGHT
          ? style.settings.color_2
          : style.settings.color_6
      }
      backgroundLineColor={
        style.theme === themes.LIGHT
          ? style.settings.color_1
          : style.settings.color_5
      }
    />
  );
};

export default IntroductionPanelContainer;

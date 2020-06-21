import React from "react";
import { useSelector } from "react-redux";

import RepositoriesPresentation from "./RepositoriesPresentation";

import { themes } from "../../utils/constants";
import { IPropsContainer } from "./types";
import { Store } from "../../store/types";
import { IStateStylesSettings } from "../../store/reducers/stylesSettingsTypes";
import { content } from "../../content";

const RepositoriesContainer: React.FC<IPropsContainer> = () => {
  const style = useSelector<Store, IStateStylesSettings>(
    (state) => state.stylesSettingsReducer
  );

  return (
    <RepositoriesPresentation
      repositories={content.repositories}
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
      colorIcon={
        style.theme === themes.LIGHT
          ? style.settings.color_1
          : style.settings.color_5
      }
      linkToGithub={content.linkToGithub}
    />
  );
};

export default RepositoriesContainer;

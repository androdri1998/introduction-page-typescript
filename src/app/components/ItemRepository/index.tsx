import React from "react";
import { useSelector } from "react-redux";

import ItemRepositoryPresentation from "./ItemRepositoryPresentation";

import { themes } from "../../utils/constants";
import { IPropsContainer } from "./types";
import { Store } from "../../store/types";
import { IStateStylesSettings } from "../../store/reducers/stylesSettingsTypes";

const ItemRepositoryContainer: React.FC<IPropsContainer> = ({ repository }) => {
  const style = useSelector<Store, IStateStylesSettings>(
    (state) => state.stylesSettingsReducer
  );
  return (
    <ItemRepositoryPresentation
      repository={repository}
      backgroundInfoColor={
        style.theme === themes.LIGHT
          ? style.settings.color_12
          : style.settings.color_13
      }
      colorName={
        style.theme === themes.LIGHT
          ? style.settings.color_2
          : style.settings.color_6
      }
      colorDescription={
        style.theme === themes.LIGHT
          ? style.settings.color_14
          : style.settings.color_6
      }
    />
  );
};

export default ItemRepositoryContainer;

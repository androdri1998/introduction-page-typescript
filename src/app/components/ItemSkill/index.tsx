import React from "react";
import { useSelector } from "react-redux";

import ItemSkillPresentation from "./ItemSkillPresentation";
import { themes } from "../../utils/constants";

import { IPropsContainer } from "./types";
import { Store } from "../../store/types";
import { IStateStylesSettings } from "../../store/reducers/stylesSettingsTypes";

const ItemSkillContainer: React.FC<IPropsContainer> = ({
  technology,
  percentage,
  background,
}) => {
  const style = useSelector<Store, IStateStylesSettings>(
    (state) => state.stylesSettingsReducer
  );
  return (
    <ItemSkillPresentation
      background={background}
      color={
        style.theme === themes.LIGHT
          ? style.settings.color_2
          : style.settings.color_6
      }
      technology={technology}
      percentage={percentage}
    />
  );
};

export default ItemSkillContainer;

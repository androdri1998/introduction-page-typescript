import React from "react";

import ItemSkillPresentation from "./ItemSkillPresentation";

import { IPropsContainer } from "./types";

const ItemSkillContainer: React.FC<IPropsContainer> = ({
  technology,
  percentage,
}) => {
  return (
    <ItemSkillPresentation technology={technology} percentage={percentage} />
  );
};

export default ItemSkillContainer;

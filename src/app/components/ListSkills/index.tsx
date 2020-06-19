import React from "react";

import ListSkillsPresentation from "./ListSkillsPresentation";

import { IPropsContainer } from "./types";

const ListSkillsContainer: React.FC<IPropsContainer> = ({ skills }) => {
  return <ListSkillsPresentation skills={skills} />;
};

export default ListSkillsContainer;

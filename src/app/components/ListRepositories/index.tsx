import React from "react";

import ListRepositoriesPresentation from "./ListRepositoriesPresentation";

import { IPropsContainer } from "./types";

const ListRepositoriesContainer: React.FC<IPropsContainer> = ({
  repositories,
}) => {
  return <ListRepositoriesPresentation repositories={repositories} />;
};

export default ListRepositoriesContainer;

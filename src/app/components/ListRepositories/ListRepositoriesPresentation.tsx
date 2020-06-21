import React from "react";

import ItemRepository from "../ItemRepository";

import { Container, ContentList } from "./styles";

import { IPropsPresentation } from "./types";

const MAX_REPOSITORIES: number = 6;

const ListRepositoriesPresentation: React.FC<IPropsPresentation> = ({
  repositories,
}) => {
  return (
    <Container>
      <ContentList>
        {repositories.slice(0, MAX_REPOSITORIES).map((repository, index) => (
          <ItemRepository key={index} repository={repository} />
        ))}
      </ContentList>
    </Container>
  );
};

export default ListRepositoriesPresentation;

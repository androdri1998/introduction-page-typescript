import React from "react";

import {
  Container,
  CoverPhoto,
  ContainerInfo,
  TitleName,
  Description,
  LinkTo,
} from "./styles";

import { IPropsPresentation } from "./types";

const ItemRepositoryPresentation: React.FC<IPropsPresentation> = ({
  repository,
  backgroundInfoColor,
  colorDescription,
  colorName,
}) => {
  return (
    <LinkTo
      href={repository.linkToRepository}
      target="_blank"
      rel="noreferrer noopener"
    >
      <Container>
        <CoverPhoto src={repository.coverPhoto} />
        <ContainerInfo background={backgroundInfoColor}>
          <TitleName color={colorName}>{repository.name}</TitleName>
          <Description color={colorDescription}>
            {repository.technology.join(", ")}
          </Description>
        </ContainerInfo>
      </Container>
    </LinkTo>
  );
};

export default ItemRepositoryPresentation;

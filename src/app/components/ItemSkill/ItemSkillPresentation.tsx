import React from "react";

import {
  Container,
  DescriptionTechnology,
  ContainerLine,
  Line,
  ContainerDescription,
} from "./styles";

import { IPropsPresentation } from "./types";

const ItemSkillPresentation: React.FC<IPropsPresentation> = ({
  percentage,
  technology,
  color,
  background,
}) => {
  return (
    <Container>
      <ContainerDescription>
        <DescriptionTechnology color={color}>
          {technology}
        </DescriptionTechnology>
        <DescriptionTechnology color={color}>
          {percentage}%
        </DescriptionTechnology>
      </ContainerDescription>
      <ContainerLine>
        <Line width={percentage} background={background}></Line>
      </ContainerLine>
    </Container>
  );
};

export default ItemSkillPresentation;

import React from "react";

import {
  Container,
  DescriptionTechnology,
  ContainerLine,
  Line,
  ContainerDescription,
  ContainerPercentage,
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
      </ContainerDescription>
      <ContainerLine>
        <Line width={percentage} background={background}></Line>
      </ContainerLine>
      <ContainerPercentage>
        <DescriptionTechnology color={color}>
          {percentage}%
        </DescriptionTechnology>
      </ContainerPercentage>
    </Container>
  );
};

export default ItemSkillPresentation;

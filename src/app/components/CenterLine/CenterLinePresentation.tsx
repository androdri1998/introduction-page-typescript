import React from "react";
import { BsChevronCompactDown } from "react-icons/bs";

import { IPropsPresentation } from "./types";
import { Container, Line, ContainerIcon } from "./styles";

const CenterLinePresentation: React.FC<IPropsPresentation> = ({ color }) => {
  return (
    <Container>
      <Line background={color} />
      <ContainerIcon color={color}>
        <BsChevronCompactDown size={100} />
      </ContainerIcon>
    </Container>
  );
};

export default CenterLinePresentation;

import React from "react";

import Toggle from "../../components/Toggle";

import { Container } from "./styles";

import { IPropsPresentation } from "./types";

const HomePresentation: React.FC<IPropsPresentation> = () => {
  return (
    <Container>
      <Toggle />
    </Container>
  );
};

export default HomePresentation;

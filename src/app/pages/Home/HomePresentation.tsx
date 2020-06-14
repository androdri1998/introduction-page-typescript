import React from "react";

import Header from "../../components/Header";

import { Container } from "./styles";

import { IPropsPresentation } from "./types";

const HomePresentation: React.FC<IPropsPresentation> = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

export default HomePresentation;

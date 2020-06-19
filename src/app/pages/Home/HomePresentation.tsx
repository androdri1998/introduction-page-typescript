import React from "react";
import { Element } from "react-scroll";
import Header from "../../components/Header";
import IntroductionPanel from "../IntroductionPanel";
import Skills from "../Skills";

import { Container } from "./styles";

import { IPropsPresentation } from "./types";

const HomePresentation: React.FC<IPropsPresentation> = ({
  backgroundColor,
}) => {
  return (
    <Container background={backgroundColor}>
      <Header />
      <Element name="home">
        <IntroductionPanel />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
    </Container>
  );
};

export default HomePresentation;

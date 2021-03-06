import React from "react";
import { Element } from "react-scroll";
import Header from "../../components/Header";
import MenuBottom from "../../components/MenuBottom";
import IntroductionPanel from "../IntroductionPanel";
import Repositories from "../Repositories";
import AboutMe from "../AboutMe";
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
      <Element name="skills" className="element">
        <Skills />
      </Element>
      <Element name="repositories">
        <Repositories />
      </Element>
      <Element name="about">
        <AboutMe />
      </Element>

      <MenuBottom />
    </Container>
  );
};

export default HomePresentation;

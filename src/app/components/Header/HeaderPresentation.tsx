import React from "react";

import Toggle from "../Toggle";
import Nav from "../Nav";

import { ContainerHeader } from "./styles";

import { IPropsPresentation } from "./types";

const HeaderPresentation: React.FC<IPropsPresentation> = () => {
  return (
    <ContainerHeader>
      <Toggle />
      <Nav />
    </ContainerHeader>
  );
};

export default HeaderPresentation;

import React from "react";

import Toggle from "../Toggle";

import { ContainerHeader } from "./styles";

import { IPropsPresentation } from "./types";

const HeaderPresentation: React.FC<IPropsPresentation> = () => {
  return (
    <ContainerHeader>
      <Toggle />
    </ContainerHeader>
  );
};

export default HeaderPresentation;

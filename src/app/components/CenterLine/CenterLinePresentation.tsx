import React from "react";
import { Link } from "react-scroll";
import { BsChevronCompactDown } from "react-icons/bs";

import { IPropsPresentation } from "./types";
import { Container, Line, ContainerIcon } from "./styles";
import { goToConstants } from "../../utils/goto.constants";

const CenterLinePresentation: React.FC<IPropsPresentation> = ({ color }) => {
  return (
    <Container>
      <Line background={color} />
      <ContainerIcon color={color}>
        <Link to={goToConstants.SKILLS} spy={true} smooth={true} duration={500}>
          <BsChevronCompactDown size={100} />
        </Link>
      </ContainerIcon>
    </Container>
  );
};

export default CenterLinePresentation;

import React from "react";
import { BsChevronCompactDown } from "react-icons/bs";
import { Link } from "react-scroll";

import { Container, ContainerIcon } from "./styles";

import { IPropsPresentation } from "./types";

const GoToPresentation: React.FC<IPropsPresentation> = ({
  colorIcon,
  colorOthersText,
  to,
  text,
}) => {
  return (
    <Link to={to} spy={true} smooth={true} duration={500}>
      <Container color={colorOthersText}>
        {text}
        <ContainerIcon color={colorIcon}>
          <BsChevronCompactDown size={40} />
        </ContainerIcon>
      </Container>
    </Link>
  );
};

export default GoToPresentation;

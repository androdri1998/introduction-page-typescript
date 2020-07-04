import React from "react";
import { BsChevronCompactDown } from "react-icons/bs";
import { Link } from "react-scroll";

import { Container, ContainerIcon, Text } from "./styles";

import { IPropsPresentation } from "./types";

const GoToPresentation: React.FC<IPropsPresentation> = ({
  colorIcon,
  colorOthersText,
  to,
  text,
}) => {
  return (
    <Container>
      <Link to={to} spy={true} smooth={true} duration={500}>
        <Text color={colorOthersText}>{text}</Text>
        <ContainerIcon color={colorIcon}>
          <BsChevronCompactDown size={40} />
        </ContainerIcon>
      </Link>
    </Container>
  );
};

export default GoToPresentation;

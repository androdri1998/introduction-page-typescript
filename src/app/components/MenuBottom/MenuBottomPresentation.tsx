import React from "react";
import {
  MdHome,
  MdBuild,
  MdLibraryBooks,
  MdAccountCircle,
} from "react-icons/md";
import { Link } from "react-scroll";

import { Container, Content } from "./styles";

import { IPropsPresentation } from "./types";

const MenuBottomPresentation: React.FC<IPropsPresentation> = ({
  backgroundColorMenu,
  colorIcons,
}) => {
  return (
    <Container>
      <Content background={backgroundColorMenu} color={colorIcons}>
        <Link to="home" spy={true} smooth={true} duration={500}>
          <MdHome size={30} />
        </Link>
        <Link to="skills" spy={true} smooth={true} duration={500}>
          <MdBuild size={30} />
        </Link>
        <Link to="repositories" spy={true} smooth={true} duration={500}>
          <MdLibraryBooks size={30} />
        </Link>
        <Link to="about" spy={true} smooth={true} duration={500}>
          <MdAccountCircle size={30} />
        </Link>
      </Content>
    </Container>
  );
};

export default MenuBottomPresentation;

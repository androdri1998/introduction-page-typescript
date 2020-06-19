import React from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

import { Container, ItemNav } from "./styles";

import { IPropsPresentation } from "./types";

const NavPresentation: React.FC<IPropsPresentation> = ({ color }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <ItemNav color={color}>
        <Link to="home" spy={true} smooth={true} duration={500}>
          {t("NAV_HOME")}
        </Link>
      </ItemNav>
      <ItemNav color={color}>
        <Link to="skills" spy={true} smooth={true} duration={500}>
          {t("NAV_SKILLS")}
        </Link>
      </ItemNav>
      <ItemNav color={color}>
        <Link to="repositories" spy={true} smooth={true} duration={500}>
          {t("NAV_REPOSITORIES")}
        </Link>
      </ItemNav>
      <ItemNav color={color}>
        <Link to="about" spy={true} smooth={true} duration={500}>
          {t("NAV_ABOUT")}
        </Link>
      </ItemNav>
    </Container>
  );
};

export default NavPresentation;

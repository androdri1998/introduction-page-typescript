import React from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

import { Container, ItemNav } from "./styles";

import { IPropsPresentation } from "./types";
import { goToConstants } from "../../utils/goto.constants";

const NavPresentation: React.FC<IPropsPresentation> = ({ color }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <ItemNav color={color}>
        <Link to={goToConstants.HOME} spy={true} smooth={true} duration={500}>
          {t("NAV_HOME")}
        </Link>
      </ItemNav>
      <ItemNav color={color}>
        <Link to={goToConstants.SKILLS} spy={true} smooth={true} duration={500}>
          {t("NAV_SKILLS")}
        </Link>
      </ItemNav>
      <ItemNav color={color}>
        <Link
          to={goToConstants.REPOSITORIES}
          spy={true}
          smooth={true}
          duration={500}
        >
          {t("NAV_REPOSITORIES")}
        </Link>
      </ItemNav>
      <ItemNav color={color}>
        <Link to={goToConstants.ABOUT} spy={true} smooth={true} duration={500}>
          {t("NAV_ABOUT")}
        </Link>
      </ItemNav>
    </Container>
  );
};

export default NavPresentation;

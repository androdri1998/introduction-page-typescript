import React from "react";
import { useTranslation } from "react-i18next";

import { Container, ItemNav } from "./styles";

import { IPropsPresentation } from "./types";

const NavPresentation: React.FC<IPropsPresentation> = ({ color }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <ItemNav color={color}>{t("NAV_REPOSITORIES")}</ItemNav>
      <ItemNav color={color}>{t("NAV_ABOUT")}</ItemNav>
      <ItemNav color={color}>{t("NAV_SKILLS")}</ItemNav>
      <ItemNav color={color}>{t("NAV_EXPERIENCES")}</ItemNav>
    </Container>
  );
};

export default NavPresentation;

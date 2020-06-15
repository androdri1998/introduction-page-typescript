import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { Container, ItemNav } from "./styles";

import { IPropsPresentation } from "./types";
import { IStateStylesSettings } from "../../store/reducers/stylesSettingsTypes";
import { Store } from "../../store/types";

const NavPresentation: React.FC<IPropsPresentation> = () => {
  const { t } = useTranslation();
  const style = useSelector<Store, IStateStylesSettings>(
    (state) => state.stylesSettingsReducer
  );

  return (
    <Container>
      <ItemNav color={style.settings.textColor}>
        {t("NAV_REPOSITORIES")}
      </ItemNav>
      <ItemNav color={style.settings.textColor}>{t("NAV_ABOUT")}</ItemNav>
      <ItemNav color={style.settings.textColor}>{t("NAV_SKILLS")}</ItemNav>
      <ItemNav color={style.settings.textColor}>{t("NAV_EXPERIENCES")}</ItemNav>
    </Container>
  );
};

export default NavPresentation;

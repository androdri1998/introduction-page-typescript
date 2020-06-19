import React from "react";
import { useTranslation } from "react-i18next";

import ListSkills from "../../components/ListSkills";

import { Content, AlignContent, TitlePage } from "./styles";

import { IPropsPresentation } from "./types";

const SkillsPresentation: React.FC<IPropsPresentation> = ({
  colorTitle,
  skills,
}) => {
  const { t } = useTranslation();
  return (
    <Content>
      <AlignContent>
        <TitlePage color={colorTitle}>{t("NAV_SKILLS")}</TitlePage>
        <ListSkills skills={skills} />
      </AlignContent>
    </Content>
  );
};

export default SkillsPresentation;

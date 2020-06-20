import React from "react";
import { useTranslation } from "react-i18next";
import { BsChevronCompactDown } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

import ListSkills from "../../components/ListSkills";

import {
  Content,
  AlignContent,
  TitlePage,
  ContentList,
  ContainerIcon,
  OthersText,
  ContainerOthers,
} from "./styles";

import { IPropsPresentation } from "./types";

const SkillsPresentation: React.FC<IPropsPresentation> = ({
  colorTitle,
  skills,
  colorIcon,
  colorOthersText,
  linkToLinkedin,
}) => {
  const { t } = useTranslation();
  return (
    <Content>
      <AlignContent>
        <TitlePage color={colorTitle}>{t("NAV_SKILLS")}</TitlePage>
        <ContentList>
          <ListSkills skills={skills} />
        </ContentList>
        <ContainerOthers color={colorOthersText}>
          <OthersText
            href={linkToLinkedin}
            target="_blank"
            rel="noreferrer noopener"
          >
            {t("SEE_ON_LINKEDIN")}
          </OthersText>
          <FaLinkedinIn size={35} />
        </ContainerOthers>
        <ContainerIcon color={colorIcon}>
          <BsChevronCompactDown size={100} />
        </ContainerIcon>
      </AlignContent>
    </Content>
  );
};

export default SkillsPresentation;

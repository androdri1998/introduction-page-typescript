import React from "react";
import { useTranslation } from "react-i18next";
import { FaLinkedinIn } from "react-icons/fa";

import ListSkills from "../../components/ListSkills";
import GoTo from "../../components/GoTo";

import useInnerWidth from "../../hooks/useInnerWidth";
import { goToConstants } from "../../utils/goto.constants";

import {
  Content,
  AlignContent,
  TitlePage,
  ContentList,
  OthersText,
  ContainerOthers,
  Footer,
  ContainerGoTo,
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
  const width = useInnerWidth();

  return (
    <Content>
      <AlignContent>
        <TitlePage color={colorTitle}>{t("NAV_SKILLS")}</TitlePage>
        <ContentList>
          <ListSkills skills={skills} />
        </ContentList>
        <Footer>
          <ContainerOthers color={colorOthersText}>
            <OthersText
              href={linkToLinkedin}
              target="_blank"
              rel="noreferrer noopener"
            >
              {t("SEE_ON_LINKEDIN")}
            </OthersText>
            <FaLinkedinIn size={width <= 800 ? 14 : 20} />
          </ContainerOthers>

          <ContainerGoTo>
            <GoTo
              to={goToConstants.REPOSITORIES}
              text={t("GO_TO_REPOSITORIES")}
            />
          </ContainerGoTo>
        </Footer>
      </AlignContent>
    </Content>
  );
};

export default SkillsPresentation;

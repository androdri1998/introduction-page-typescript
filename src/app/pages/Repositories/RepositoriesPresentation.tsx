import React from "react";
import { useTranslation } from "react-i18next";
import { FiGithub } from "react-icons/fi";

import GoTo from "../../components/GoTo";
import ListRepositories from "../../components/ListRepositories";

import useInnerWidth from "../../hooks/useInnerWidth";
import { goToConstants } from "../../utils/goto.constants";

import {
  Content,
  AlignContent,
  TitlePage,
  ContentList,
  ContainerOthers,
  OthersText,
  Footer,
  ContainerGoTo,
} from "./styles";

import { IPropsPresentation } from "./types";

const RepositoriesPresentation: React.FC<IPropsPresentation> = ({
  colorTitle,
  repositories,
  colorIcon,
  colorOthersText,
  linkToGithub,
}) => {
  const { t } = useTranslation();
  const width = useInnerWidth();

  return (
    <Content>
      <AlignContent>
        <TitlePage color={colorTitle}>{t("NAV_REPOSITORIES")}</TitlePage>
        <ContentList>
          <ListRepositories repositories={repositories} />
        </ContentList>
        <Footer>
          <ContainerOthers color={colorOthersText}>
            <OthersText
              href={linkToGithub}
              target="_blank"
              rel="noreferrer noopener"
            >
              {t("SEE_MORE_ON_LINKEDIN")}
            </OthersText>
            <FiGithub size={width <= 800 ? 14 : 20} />
          </ContainerOthers>
          <ContainerGoTo>
            <GoTo to={goToConstants.ABOUT} text={t("GO_TO_ABOUT_ME")} />
          </ContainerGoTo>
        </Footer>
      </AlignContent>
    </Content>
  );
};

export default RepositoriesPresentation;

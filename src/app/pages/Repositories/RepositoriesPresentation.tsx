import React from "react";
import { useTranslation } from "react-i18next";
import { BsChevronCompactDown } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";

import ListRepositories from "../../components/ListRepositories";

import {
  Content,
  AlignContent,
  TitlePage,
  ContentList,
  ContainerOthers,
  OthersText,
  ContainerIcon,
  Footer,
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
            <FiGithub size={35} />
          </ContainerOthers>
          <ContainerIcon color={colorIcon}>
            <BsChevronCompactDown size={95} />
          </ContainerIcon>
        </Footer>
      </AlignContent>
    </Content>
  );
};

export default RepositoriesPresentation;

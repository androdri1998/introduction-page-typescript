import React from "react";
import { useTranslation } from "react-i18next";
import { FaLinkedinIn } from "react-icons/fa";

import {
  Content,
  AlignContent,
  ContentText,
  TitlePage,
  Footer,
  ContainerOthers,
  OthersText,
} from "./styles";

import { IPropsPresentation } from "./types";

const AboutMePresentation: React.FC<IPropsPresentation> = ({
  colorTitle,
  colorOthersText,
  linkToLinkedin,
  aboutMe,
  colorParagraph,
}) => {
  const { t } = useTranslation();
  return (
    <Content>
      <AlignContent>
        <TitlePage color={colorTitle}>{t("NAV_ABOUT")}</TitlePage>
        <ContentText color={colorParagraph}>
          {aboutMe.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </ContentText>
        <Footer>
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
        </Footer>
      </AlignContent>
    </Content>
  );
};

export default AboutMePresentation;

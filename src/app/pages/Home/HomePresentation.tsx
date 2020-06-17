import React from "react";
import { useTranslation } from "react-i18next";
import { FaLinkedinIn } from "react-icons/fa";

import Header from "../../components/Header";
import CenterLine from "../../components/CenterLine";

import {
  Container,
  Content,
  ContainerProfile,
  ContainerDraw,
  ImageProfile,
  FisrtNameTextProfile,
  LastNameTextProfile,
  OthersText,
  ContainerOthers,
} from "./styles";

import { IPropsPresentation } from "./types";

const HomePresentation: React.FC<IPropsPresentation> = ({
  backgroundColor,
  colorTextName,
  profilePhoto,
  firstname,
  lastname,
  colorOthersText,
  linkToLinkedin,
}) => {
  const { t } = useTranslation();

  return (
    <Container background={backgroundColor}>
      <Header />
      <Content>
        <ContainerDraw />
        <CenterLine />
        <ContainerProfile>
          <ImageProfile src={profilePhoto} />
          <FisrtNameTextProfile marginTop={40} color={colorTextName}>
            {firstname}
          </FisrtNameTextProfile>
          <LastNameTextProfile color={colorTextName}>
            {lastname}
          </LastNameTextProfile>
          <ContainerOthers color={colorOthersText}>
            <OthersText
              href={linkToLinkedin}
              target="_blank"
              rel="noreferrer noopener"
            >
              {t("SEE_ON_LINKEDIN")}
            </OthersText>
            <FaLinkedinIn size={20} />
          </ContainerOthers>
        </ContainerProfile>
      </Content>
    </Container>
  );
};

export default HomePresentation;

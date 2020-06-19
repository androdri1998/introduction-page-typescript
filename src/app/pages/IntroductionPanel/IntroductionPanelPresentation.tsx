import React from "react";
import { useTranslation } from "react-i18next";
import { FaLinkedinIn } from "react-icons/fa";

import CenterLine from "../../components/CenterLine";

import {
  Content,
  ContainerProfile,
  ContainerDraw,
  ImageProfile,
  FisrtNameTextProfile,
  LastNameTextProfile,
  OthersText,
  ContainerOthers,
  TextPanel,
  ContainerDrawHorizontal,
  ContainerDrawVertical,
  Line,
  ContainerLine,
  AlignContent,
} from "./styles";

import { IPropsPresentation } from "./types";

const IntroductionPanelPresentation: React.FC<IPropsPresentation> = ({
  colorTextName,
  profilePhoto,
  firstname,
  lastname,
  colorOthersText,
  linkToLinkedin,
  colorTextPanel,
  backgroundLineColor,
}) => {
  const { t } = useTranslation();

  return (
    <Content>
      <AlignContent>
        <ContainerDraw>
          <ContainerDrawVertical>
            <TextPanel color={colorTextPanel} marginTop={20}>
              {t("TEXT_PANEL_DEVELOPER")}
            </TextPanel>
            <ContainerDrawHorizontal>
              <ContainerLine>
                <Line background={backgroundLineColor} />
              </ContainerLine>
              <ContainerDrawVertical>
                <ContainerDrawVertical>
                  <TextPanel color={colorTextPanel} marginTop={10}>
                    {t("TEXT_PANEL_BACKEND")}
                  </TextPanel>
                  <ContainerDrawHorizontal>
                    <ContainerLine>
                      <Line background={backgroundLineColor} />
                    </ContainerLine>
                    <ContainerDrawVertical>
                      <TextPanel color={colorTextPanel} marginTop={10}>
                        {t("TEXT_PANEL_NODEJS")}
                      </TextPanel>
                      <TextPanel color={colorTextPanel} marginTop={10}>
                        {t("TEXT_PANEL_PHP")}
                      </TextPanel>
                    </ContainerDrawVertical>
                  </ContainerDrawHorizontal>
                </ContainerDrawVertical>
                <ContainerDrawVertical>
                  <TextPanel color={colorTextPanel} marginTop={10}>
                    {t("TEXT_PANEL_FRONTEND")}
                  </TextPanel>
                  <ContainerDrawHorizontal>
                    <ContainerLine>
                      <Line background={backgroundLineColor} />
                    </ContainerLine>
                    <ContainerDrawVertical>
                      <TextPanel color={colorTextPanel} marginTop={10}>
                        {t("TEXT_PANEL_REACT")}
                      </TextPanel>
                    </ContainerDrawVertical>
                  </ContainerDrawHorizontal>
                </ContainerDrawVertical>
              </ContainerDrawVertical>
            </ContainerDrawHorizontal>
          </ContainerDrawVertical>
        </ContainerDraw>
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
      </AlignContent>
    </Content>
  );
};

export default IntroductionPanelPresentation;
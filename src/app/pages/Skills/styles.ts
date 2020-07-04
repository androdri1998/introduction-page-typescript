import styled, { css } from "styled-components";
import { ITitlePage, IContainerIconProps, IContainerOthers } from "./types";

export const Content = styled.section`
  position: relative;
  display: flex;
  height: 100vh;
  min-height: 320px;
  flex-direction: column;
  justify-content: center;
`;

export const AlignContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentList = styled.div`
  display: flex;
  width: 100%;
  max-width: 900px;
  padding: 0 20px;
`;

export const TitlePage = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 2rem;
  align-self: center;
  transition: 0.8s;
  margin-bottom: 30px;
  ${(props: ITitlePage) =>
    props.color &&
    css`
      color: ${props.color};
    `};

  @media (min-width: 500px) {
  }
`;

export const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    transition: 1.8s;
    ${(props: IContainerIconProps) =>
      props.color &&
      css`
        color: ${props.color} !important;
      `};
  }
`;

export const ContainerOthers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    transition: 0.8s;
    ${(props: IContainerOthers) =>
      props.color &&
      css`
        color: ${props.color};
      `};
  }

  a {
    transition: 0.8s;
    ${(props: IContainerOthers) =>
      props.color &&
      css`
        color: ${props.color};
      `};
  }

  @media (min-width: 800px) {
    margin-top: 30px;
  }
`;

export const OthersText = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-size: 1rem;
  font-family: font-family: 'Roboto', sans-serif;
  transition: 0.8s;
  margin-right: 5px;

  @media (min-width: 800px) {
    font-size: 1.5rem;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContainerGoTo = styled.div`
  margin-top: 30px;

  @media (min-width: 800px) {
    margin-top: 60px;
  }
`;

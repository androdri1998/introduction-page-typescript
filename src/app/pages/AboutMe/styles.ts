import styled, { css } from "styled-components";
import {
  ITitlePage,
  IContainerOthers,
  IContainerIconProps,
  IContentText,
} from "./types";

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
  padding: 20px;
`;

export const ContentText = styled.div`
  display: flex;
  width: 100%;
  max-width: 900px;
  flex-direction: column;

  p {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    margin-bottom: 40px;
    transition: 0.8s;
    ${(props: IContentText) =>
      props.color &&
      css`
        color: ${props.color};
      `};
  }

  @media (min-width: 600px) {
    p {
      font-size: 1.4rem;
    }
  }

  @media (min-width: 800px) {
    p {
      font-size: 1.8rem;
    }
  }
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

  @media (min-width: 800px) {
    font-size: 3rem;
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
  flex: 1;
  margin-top: 70px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

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

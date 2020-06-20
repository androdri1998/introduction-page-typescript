import styled, { css } from "styled-components";
import { ITitlePage, IContainerIconProps, IContainerOthers } from "./types";

export const Content = styled.section`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

export const AlignContent = styled.div`
  display: flex;
  flex: 1;
  margin-top: 150px;
  flex-direction: column;
  align-items: center;
`;

export const ContentList = styled.div`
  display: flex;
  margin-top: 60px;
  width: 100%;
  max-width: 900px;
`;

export const TitlePage = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 3rem;
  align-self: center;
  transition: 0.8s;
  ${(props: ITitlePage) =>
    props.color &&
    css`
      color: ${props.color};
    `};
`;

export const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;

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
`;

export const OthersText = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-size: 2rem;
  font-family: font-family: 'Roboto', sans-serif;
  transition: 0.8s;
  margin-right: 5px;
`;

import styled, { css } from "styled-components";
import { ITextNameProfile, IContainerOthers, ITextPanel, ILine } from "./types";

export const Content = styled.section`
  position: relative;
  display: flex;
  height: 100vh;
  min-height: 320px;
  flex-direction: row;
  justify-content: space-between;
`;

export const AlignContent = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const ContainerDraw = styled.div`
  display: none;
  padding: 60px 0px;

  @media (min-width: 1200px) {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const ContainerDrawVertical = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerDrawHorizontal = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContainerLine = styled.div`
  display: flex;
  width: 80px;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  width: 5px;
  border-radius: 10px;
  margin-left: 25px;
  transition: 1.8s;
  ${(props: ILine) =>
    props.background &&
    css`
      background: ${props.background};
    `};
`;

export const ContainerProfile = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 60px 0px;
`;

export const ContainerOthers = styled.div`
  display: flex;
  margin-top: 15px;
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
`;

export const ImageProfile = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 50%;

  @media (min-width: 500px) {
    height: 180px;
    width: 180px;
  }

  @media (min-width: 1200px) {
    height: 260px;
    width: 260px;
  }

  @media (min-width: 1366px) {
    height: 320px;
    width: 320px;
  }
`;

export const TextNameProfile = styled.p`
  font-size: 2.6rem;
  font-family: font-family: 'Ubuntu', sans-serif;
  font-weight: 700;
  transition: 0.8s;
  margin-top: ${(props: ITextNameProfile) =>
    props.marginTop ? `${props.marginTop}px` : 0};
  ${(props: ITextNameProfile) =>
    props.color &&
    css`
      color: ${props.color};
    `};

  @media (min-width: 500px) {
    font-size: 3em;
  }
  @media (min-width: 1200px) {
    font-size: 3.5em;
  }
  @media (min-width: 1366px) {
    font-size: 4.2em;
  }
`;

export const OthersText = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-size: 1rem;
  font-family: font-family: 'Roboto', sans-serif;
  transition: 0.8s;
  margin-right: 5px;

  @media (min-width: 500px) {
    font-size: 1.2em;
  }
`;

export const FisrtNameTextProfile = styled(TextNameProfile)``;
export const LastNameTextProfile = styled(TextNameProfile)``;

export const TextPanel = styled.p`
  font-size: 3.5rem;
  font-family: font-family: 'Ubuntu', sans-serif;
  font-weight: 700;
  transition: 0.8s;
  margin-top: ${(props: ITextNameProfile) =>
    props.marginTop ? `${props.marginTop}px` : 0};
  ${(props: ITextPanel) =>
    props.color &&
    css`
      color: ${props.color};
    `};

  @media (min-width: 1366px) {
    font-size: 4.6rem;
  }
`;

export const ContainerGoTo = styled.div`
  margin-top: 40px;
`;

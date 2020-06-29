import styled, { css } from "styled-components";
import { ITextNameProfile, IContainerOthers, ITextPanel, ILine } from "./types";

export const Content = styled.section`
  display: flex;
  height: 100vh;
  flex-direction: row;
  justify-content: space-between;
`;

export const AlignContent = styled.div`
  display: flex;
  flex: 1;
  margin-top: 40px;
  justify-content: center;
`;

export const ContainerDraw = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
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
  flex-direction: column;
`;

export const ContainerOthers = styled.div`
  display: flex;
  margin-top: 30px;
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
  margin-top: 60px;
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
`;

export const OthersText = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-size: 1rem;
  font-family: font-family: 'Roboto', sans-serif;
  transition: 0.8s;
  margin-right: 5px;
`;

export const FisrtNameTextProfile = styled(TextNameProfile)``;
export const LastNameTextProfile = styled(TextNameProfile)``;

export const TextPanel = styled.p`
  font-size: 4.8rem;
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
`;

export const ContainerGoTo = styled.div`
  margin-top: 70px;
`;

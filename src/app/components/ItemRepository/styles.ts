import styled, { css } from "styled-components";
import { IContainerInfo, ITitleName, IDescription } from "./types";

export const Container = styled.article`
  display: flex;
  width: 275px;
  height: 246px;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const LinkTo = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const CoverPhoto = styled.img`
  width: 275px;
  height: 246px;
  border-radius: 15px;
`;

export const ContainerInfo = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90px;
  margin-top: -90px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 10px;
  transition: 0.8s;
  ${(props: IContainerInfo) =>
    props.background &&
    css`
      background: ${props.background};
    `};
`;
export const TitleName = styled.p`
  margin-bottom: 5px;
  font-family: "Ubuntu", sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  transition: 0.8s;
  ${(props: ITitleName) =>
    props.color &&
    css`
      color: ${props.color};
    `};
`;
export const Description = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  transition: 0.8s;
  ${(props: IDescription) =>
    props.color &&
    css`
      color: ${props.color};
    `};
`;

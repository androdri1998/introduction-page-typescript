import styled, { css } from "styled-components";
import { IDescriptionTechnology, ILine } from "./types";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const ContainerLine = styled.div`
  display: flex;
  flex: 1;
  margin-left: 35px;
  margin-right: 35px;
  height: 18px;
  border-radius: 20px;
  background: rgba(176, 190, 197, 0.3);
`;

export const Line = styled.div`
  height: 18px;
  border-radius: 20px;
  ${(props: ILine) =>
    css`
      background: ${props.background};
      width: ${props.width ? `${props.width}%` : 0};
    `};
`;

export const ContainerDescription = styled.div`
  display: flex;
  min-width: 100px;
  justify-content: flex-end;
`;

export const ContainerPercentage = styled.div`
  display: flex;
  min-width: 100px;
  justify-content: flex-start;
  transition: 0.8s;

  @media (max-width: 1040px) {
    min-width: 60px;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

export const DescriptionTechnology = styled.p`
  font-size: 1.3em;
  font-family: "Roboto", sans-serif;
  trasition: 0.8s;
  ${(props: IDescriptionTechnology) =>
    props.color &&
    css`
      color: ${props.color};
    `};
`;

import styled, { css } from "styled-components";
import { IDescriptionTechnology, ILine } from "./types";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const ContainerLine = styled.div`
  display: flex;
  flex: 1;
  height: 14px;
  border-radius: 20px;
  background: rgba(176, 190, 197, 0.3);
`;

export const Line = styled.div`
  height: 100%;
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
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const ContainerPercentage = styled.div`
  display: flex;
  justify-content: flex-start;
  transition: 0.8s;
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

import styled, { css } from "styled-components";
import { ILineProps, IContainerIconProps } from "./types";

export const Container = styled.div`
  display: flex;
  width: 160px;
  height: 760px;
  align-self: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 1040px) {
    display: none;
  }
`;

export const Line = styled.div`
  display: flex;
  min-width: 5px;
  height: 
  border-radius: 15px;
  flex: 1;
  align-self: center;
  transition: 1.8s;
  ${(props: ILineProps) =>
    props.background &&
    css`
      background: ${props.background};
    `};
`;

export const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 40px;

  svg {
    transition: 1.8s;
    ${(props: IContainerIconProps) =>
      props.color &&
      css`
        color: ${props.color} !important;
      `};
  }
`;

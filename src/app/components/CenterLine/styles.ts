import styled, { css } from "styled-components";
import { ILineProps, IContainerIconProps } from "./types";

export const Container = styled.div`
  display: flex;
  width: 160px;
  flex: 1;
  align-self: center;
  justify-content: center;
  margin-top: 80px;
  flex-direction: column;
`;

export const Line = styled.div`
  display: flex;
  width: 5px;
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

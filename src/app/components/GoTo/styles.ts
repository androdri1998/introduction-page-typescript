import styled, { css } from "styled-components";
import { IContainerIconProps, IContainerComponent } from "./types";

export const Container = styled.div`
  a {
    transition: 0.8s;
    ${(props: IContainerComponent) =>
      props.color &&
      css`
        color: ${props.color} !important;
      `};
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

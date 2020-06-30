import styled, { css, keyframes } from "styled-components";
import { IContainerIconProps, IContainerComponent } from "./types";

const animationIcon = keyframes`
  from {
    margin-top: 10px;
  }

  50% {
    margin-top: 15px;
  }

  to {
    margin-top: 10px;
  }
`;

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
    position: absolute;
    animation: ${animationIcon} 1.2s infinite;
    transition: 1.8s;
    ${(props: IContainerIconProps) =>
      props.color &&
      css`
        color: ${props.color} !important;
      `};
  }
`;

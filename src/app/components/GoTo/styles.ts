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
  display: flex;
  cursor: pointer;
  transition: 0.8s;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Text = styled.p`
  display: flex;
  transition: 0.8s;
  align-self: flex-start;
  ${(props: IContainerComponent) =>
    props.color &&
    css`
      color: ${props.color} !important;
    `};

  @media (min-width: 800px) {
    font-size: 1.3rem;
  }
`;

export const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

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

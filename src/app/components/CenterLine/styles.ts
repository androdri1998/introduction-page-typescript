import styled, { css, keyframes } from "styled-components";
import { ILineProps, IContainerIconProps } from "./types";

const animationIcon = keyframes`
  from {
    padding-top: 35px;
  }

  50% {
    padding-top: 40px;
  }

  to {
    padding-top: 35px;
  }
`;

export const Container = styled.div`
  display: none;
  width: 160px;
  height: 100%;
  align-self: center;
  justify-content: center;
  flex-direction: column;
  padding: 100px 0;
  padding-top: 120px;

  @media (min-width: 1200px) {
    display: flex;
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
  align-self: center;
  align-items: center;
  justify-content: center;
  bottom: 0;

  svg {
    cursor: pointer;
    transition: 1.8s;
    animation: ${animationIcon} 1.2s infinite;
    ${(props: IContainerIconProps) =>
      props.color &&
      css`
        color: ${props.color} !important;
      `};
  }
`;

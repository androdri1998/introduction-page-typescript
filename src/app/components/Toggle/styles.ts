import styled, { keyframes, css } from "styled-components";

import { IToggleProps } from "./types";
import { themes } from "../../utils/constants";

const toggleAnimation = {
  [themes.DARK]: keyframes`
    from {
      margin-left: 32px;
    }

    to {
      margin-left: -42px;
    }
  `,
  [themes.LIGHT]: keyframes`
    from {
      margin-left: -42px;
    }

    to {
      margin-left: 32px;
    }
  `,
};

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ToggleContent = styled.div`
  display: flex;
  align-items: center;
`;

export const Toggle = styled.div`
  display: flex;
  height: 25px;
  width: 50px;
  border-radius: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.8s;
  ${(props: IToggleProps) =>
    props.background &&
    css`
      background: ${props.background};
    `};
`;

export const ToggleIconLight = styled.div`
  display: flex;
  align-self: center;
  animation: ${toggleAnimation.light} 1s;
  margin-left: 32px;
  cursor: pointer;
`;

export const ToggleIconDark = styled.div`
  display: flex;
  align-self: center;
  animation: ${toggleAnimation.dark} 1s;
  margin-left: -42px;
  cursor: pointer;
`;

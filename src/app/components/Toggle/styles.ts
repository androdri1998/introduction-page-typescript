import styled, { keyframes, css } from "styled-components";

import { IToggleProps } from "./types";
import { themes } from "../../utils/constants";

const toggleAnimation = {
  [themes.DARK]: keyframes`
    from {
      margin-left: 84px;
    }

    to {
      margin-left: -55px;
    }
  `,
  [themes.LIGHT]: keyframes`
    from {
      margin-left: -55px;
    }

    to {
      margin-left: 84px;
    }
  `,
};

export const ToggleContainer = styled.div``;

export const ToggleContent = styled.div`
  padding: 10px 30px;
`;

export const Toggle = styled.div`
  display: flex;
  height: 40px;
  width: 80px;
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
  margin-left: 84px;
  cursor: pointer;
`;

export const ToggleIconDark = styled.div`
  display: flex;
  align-self: center;
  animation: ${toggleAnimation.dark} 1s;
  margin-left: -55px;
  cursor: pointer;
`;

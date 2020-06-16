import styled, { css } from "styled-components";
import { IContainerProps } from "./types";

export const Container = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  transition: 0.8s;
  ${(props: IContainerProps) =>
    props.background &&
    css`
      background: ${props.background};
    `};
`;

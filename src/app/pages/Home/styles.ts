import styled, { css } from "styled-components";
import { IContainerProps } from "./types";

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  transition: 0.8s;
  ${(props: IContainerProps) =>
    props.background &&
    css`
      background: ${props.background};
    `};
`;

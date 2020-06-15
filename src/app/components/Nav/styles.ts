import styled, { css } from "styled-components";
import { IItemNavProps } from "./types";

export const Container = styled.nav``;
export const ItemNav = styled.a`
  font-family: "Roboto", sans-serif;
  font-size: 1.6rem;
  trasition: 0.8s;
  margin-left: 50px;
  ${(props: IItemNavProps) =>
    props.color &&
    css`
      color: ${props.color};
    `};
`;

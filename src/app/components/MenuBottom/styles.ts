import styled, { css } from "styled-components";
import { IContent } from "./types";

export const Container = styled.nav`
  display: flex;
  position: fixed;
  bottom: 0;
  height: 70px;
  width: 100%;
  padding: 10px 30px;

  @media (min-width: 801px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  border-radius: 15px 40px;
  ${(props: IContent) =>
    props.background &&
    css`
      background: ${props.background};
    `};

  a {
    display: flex;
    flex: 1;
    height: 100%;
    align-items: center;
    justify-content: center;

    svg {
      transition: 0.8s;
      ${(props: IContent) =>
        props.color &&
        css`
          color: ${props.color};
        `};
    }
  }

  a: first-child {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 40px;
  }

  a: last-child {
    border-top-right-radius: 40px;
    border-bottom-right-radius: 15px;
  }
`;

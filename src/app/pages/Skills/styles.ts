import styled, { css } from "styled-components";
import { ITitlePage } from "./types";

export const Content = styled.section`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

export const AlignContent = styled.div`
  display: flex;
  flex: 1;
  margin-top: 130px;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitlePage = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 3rem;
  align-self: center;
  transition: 0.8s;
  ${(props: ITitlePage) =>
    props.color &&
    css`
      color: ${props.color};
    `};
`;

import styled from "styled-components";

import { IToggleProps } from "./types";

export const ToggleContainer = styled.div``;

export const ToggleContent = styled.div`
  padding: 10px;
`;

export const Toggle = styled.div`
  height: 40px;
  width: 80px;
  border-radius: 30px;
  background: ${(props: IToggleProps) => props.background};
`;

export const ToggleIcon = styled.div``;

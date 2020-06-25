import styled from "styled-components";

export const ContainerHeader = styled.div`
  display: flex;
  height: 130px;
  width: 100%;
  padding: 0 60px 0 30px;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;

  @media (max-width: 1040px) {
    padding: 0 30px 0 10px;
  }
`;

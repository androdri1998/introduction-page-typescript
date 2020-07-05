import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export const ContentList = styled.div`
  display: flex;
  overflow-y: auto;
  padding: 10px;

  a {
    margin-right: 36px;
  }

  @media (min-width: 1040px) {
    display: grid;
    width: auto;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 36px;

    a {
      margin-right: 0;
    }
  }
`;

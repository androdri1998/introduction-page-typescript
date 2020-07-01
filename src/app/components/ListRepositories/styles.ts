import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export const ContentList = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 36px;

  @media (min-width: 1040px) {
    display: flex;
    overflow-y: auto;
    padding: 10px;

    article {
      margin-right: 36px;
    }
  }
`;

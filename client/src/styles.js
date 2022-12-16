import styled from "styled-components";
import Theme from "./theme";

export const Main = styled.div`
  margin-left: 17rem;
  background-color: ${Theme.color.grey};
  @media (max-width: 1280px) {
    margin-left: 14.5rem;
  }
`;

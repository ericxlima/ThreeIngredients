import styled from "styled-components";
import Theme from "./theme";

export const Main = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${Theme.fontStyle.font_headings};
  }

  body {
    font-size: 1.6rem;
    font-family: ${Theme.fontStyle.font_primary};
  }
`;

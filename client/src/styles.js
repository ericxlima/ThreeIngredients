import styled from "styled-components";
import Theme from "./theme";

export const Main = styled.div`
  * {
    font-family: ${Theme.fontStyle.font_primary};
    font-feature-settings: "pnum" on, "lnum" on;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${Theme.fontStyle.font_headings};
  }
`;

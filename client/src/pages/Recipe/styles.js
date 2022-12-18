import styled from "styled-components";
import Theme from "../../theme";

export const RecipeContainer = styled.div`
  container {
    max-width: 144rem;
    margin: 0 auto;
    padding: ${Theme.spacingGutter.small};
  }

  .main-content {
    padding-top: 0;
  }

  .main-content-detail {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: ${Theme.spacingGutter.large};
  }
`;

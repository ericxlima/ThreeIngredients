import styled from "styled-components";
import Theme from "../../theme";

export const HomeContainer = styled.div`
  .container {
    max-width: 144rem;
    margin: 0 auto;
    padding: 0 ${Theme.spacingGutter.medium};
  }

  .main-logo {
    font-size: 4rem;
    color: white;
    text-decoration: none;
    display: flex;
    flex-wrap: row nowrap;
    align-items: center;
    justify-content: center;
    width: fit-content;
    margin: 0 auto;
  }

  .main-logo-icon {
    margin-right: 2rem;
  }

  .main-logo-text {
  }

  .main-header-container {
    background-color: ${Theme.color.primary_dark};
  }
`;

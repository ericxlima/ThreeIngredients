import styled from "styled-components";
import Theme from "../../theme";

export const HeaderContainer = styled.div`
  .container {
    max-width: 144rem;
    margin: 0 auto;
    padding: ${Theme.spacingGutter.small};
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

  .main-logo-text {
    margin-left: 1rem;
    font-size: ${Theme.fontSize.font28px};
  }

  .main-header-container {
    background-color: ${Theme.color.primary_dark};
  }
`;

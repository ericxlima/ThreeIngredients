import styled from "styled-components";
import Theme from "../../theme";

export const FooterContainer = styled.div`
  .main-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${Theme.color.primary_dark};
    color: ${Theme.color.white};
    padding: ${Theme.spacingGutter.large};
    margin-top: ${Theme.spacingGutter.medium};
  }

  .main-footer a {
    color: ${Theme.color.white};
    text-decoration: none;
    transition: all 300ms ease-in-out;
    margin: 0 0.3rem;
  }

  .main-footer a:hover {
    filter: brightness(0.8);
  }
`;

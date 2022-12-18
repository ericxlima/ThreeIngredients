import styled from "styled-components";
import Theme from "../../theme";

export const HomeContainer = styled.div`
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
  }

  .main-header-container {
    background-color: ${Theme.color.primary_dark};
  }

  .search-contaioner {
  }

  .search-form {
    border: 0.2rem solid ${Theme.color.primary_dark};
    max-width: 64rem;
    margin: 0 auto;
    border-radius: 1rem;
    position: relative;
    transition: all 0.3s ease-in-out;
  }

  .search-input,
  .search-button {
    background-color: transparent;
    border: none;
    background-color: none;
    outline: none;
    padding: 1rem;
  }

  .search-input {
    border-radius: 1rem;
    width: 100%;
    padding-right: 4rem;
  }

  .search-button {
    background-color: transparent;
    border-radius: 0 1rem 1rem 0;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
  }

  .search-form:focus-within {
    border-color: ${Theme.color.primary};
  }

  .search-form:focus-within .search-button {
    color: ${Theme.color.primary};
  }

  .search-form:focus-within .search-input,
  search-button {
    background-color: ${Theme.color.white};
  }

  .search-button:focus {
    outline: 1px solid ${Theme.color.primary};
  }

  .main-content {
  }
`;

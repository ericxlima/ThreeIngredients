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
    font-size: ${Theme.fontSize.font28px};
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
    padding-top: 0;
  }

  .main-content-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: ${Theme.spacingGutter.large};
  }

  .recipe {
    background-color: ${Theme.color.white};
    box-shadow: ${Theme.shadow.shadow0};
    transition: all 0.3s ease-in-out;
    transform: scale(1);
    border-radius: 0.4rem;
    overflow: hidden;
  }

  .recipe img {
    max-width: 100%;
  }

  .recipe-list-item {
    max-width: 64rem;
  }

  .recipe-list-item:hover {
    transform: scale(1.03);
    box-shadow: ${Theme.shadow.shadow1};
  }

  .recipe-tittle-container {
    padding: ${Theme.spacingGutter.small};
  }

  .recipe-author {
    padding: 0 ${Theme.spacingGutter.small};
  }

  .recipe-author-item {
    color: ${Theme.color.gray_4};
    margin-right: 1rem;
  }

  .recipe-author-item a {
    color: ${Theme.color.primary_dark};
    transition: all 0.3s ease-in-out;
    text-decoration: none;
  }

  .recipe-author-item a:hover {
    color: ${Theme.color.primary};
  }

  .recipe-content {
    padding: ${Theme.spacingGutter.small};
  }

  .recipe-meta-container {
    display: flex;
    flex-flow: row wrap;
    padding: ${Theme.spacingGutter.small};
    background-color: ${Theme.color.gray_1};
  }

  .recipe-meta {
    display: flex;
    flex-flow: column nowrap;
    flex-shrink: 1;
    flex-grow: 1;
    text-align: center;
  }

  .recipe-meta-title {
    font-size: ${Theme.fontSize.font16px};
  }

  .recipe-footer a {
    background-color: ${Theme.color.primary_dark};
    display: block;
    color: ${Theme.color.white};
    text-decoration: none;
    text-align: center;
    padding: ${Theme.spacingGutter.small};
    transition: all 0.3s ease-in-out;
  }

  .recipe-footer a:hover {
    filter: brightness(2);
  }
`;

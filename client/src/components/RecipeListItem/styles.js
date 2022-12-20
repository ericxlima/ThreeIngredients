import styled from "styled-components";
import Theme from "../../theme";

export const RecipeListItemContainer = styled.div`
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

  .recipe-tittle-container a {
    text-decoration: none;
    color: ${Theme.color.primary_dark};
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

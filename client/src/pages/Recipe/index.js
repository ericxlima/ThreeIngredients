import React from "react";

import { RecipeContainer } from "./styles";

import { Header, Search, Footer, RecipeDetail } from "../../components";

const Recipe = () => {
  return (
    <RecipeContainer>
      <Header />
      <Search />

      <div className="main-content-container">
        <div className="main-content main-content-detail container">
          <RecipeDetail />
        </div>
      </div>

      <Footer />
    </RecipeContainer>
  );
};

export default Recipe;

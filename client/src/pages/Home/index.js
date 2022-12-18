import React from "react";

import { HomeContainer } from "./styles";

import { Header, Search, RecipeListItem, Footer } from "../../components";

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <Search />

      <div className="main-content-container">
        <div className="main-content main-content-list container">
          <RecipeListItem />
          <RecipeListItem />
          <RecipeListItem />
          <RecipeListItem />
          <RecipeListItem />
        </div>
      </div>

      <Footer />
    </HomeContainer>
  );
};

export default Home;

import React from "react";

import { HomeContainer } from "./styles";

import CoffeeIcon from "@mui/icons-material/Coffee";
import SearchIcon from "@mui/icons-material/Search";

const Home = () => {
  return (
    <HomeContainer>
      <header className="main-header-container">
        <div className="main-header container">
          <a className="main-logo" href="/">
            <CoffeeIcon sx={{ fontSize: 40 }} />
            <span className="main-logo-text">Love Coffee</span>
          </a>
        </div>
      </header>

      <div className="search-contaioner">
        <div className="container">
          <form action="" className="search-form">
            <input
              type="search"
              className="search-input"
              name="search"
              placeholder="Digite para pesquisar"
            />
            <button type="submit" className="search-button">
              <SearchIcon />
            </button>
          </form>
        </div>
      </div>

      <div className="main-content-container">
        <div className="main-content main-content-list"></div>
      </div>
    </HomeContainer>
  );
};

export default Home;

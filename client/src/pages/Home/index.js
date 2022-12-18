import React from "react";

import { HomeContainer } from "./styles";

import CoffeeIcon from "@mui/icons-material/Coffee";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import CalendarMonth from "@mui/icons-material/CalendarMonth";
import Layers from "@mui/icons-material/Layers";
import WatchLater from "@mui/icons-material/WatchLater";
import LocalPizza from "@mui/icons-material/LocalPizza";
import Visibility from "@mui/icons-material/Visibility";

const Home = () => {
  return (
    <HomeContainer>
      <header className="main-header-container">
        <div className="main-header container">
          <a className="main-logo" href="/">
            <CoffeeIcon sx={{ fontSize: 40 }} />
            <h1 className="main-logo-text">Love Coffee</h1>
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
        <div className="main-content main-content-list container">
          <div className="recipe recipe-list-item">
            <div className="recipe-cover">
              <img
                src="https://via.placeholder.com/1280x720.png/269fe6"
                alt=""
              />
            </div>
            <div className="recipe-tittle-container">
              <h2 className="recipe-tittle">
                Lorem ipsum dolor sit amet consectetur.
              </h2>
            </div>
            <div className="recipe-author">
              <span className="recipe-author-item">
                <AccountCircle />
                Hicaro Brazil
              </span>
              <span className="recipe-author-item">
                <CalendarMonth />
                18/12/2022 às 00:40
              </span>
              <span className="recipe-author-item">
                <a href="recipes/category/bebida/">
                  <Layers />
                  <span>Bebida</span>
                </a>
              </span>
            </div>
            <div className="recipe-content">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tenetur distinctio quis, dicta maxime, repellat quas cum culpa
                autem accusamus et architecto, perspiciatis soluta corporis
                ducimus itaque! Dolorum delectus illum dignissimos.
              </p>
            </div>
            <div className="recipe-meta-container">
              <div className="recipe-meta recipe-preparation">
                <h3 className="recipe-meta-title">
                  <WatchLater />
                  Preparo
                </h3>
                <div className="recipe-meta-text">10 Minutos</div>
              </div>
              <div className="recipe-meta recipe-servings">
                <h3 className="recipe-meta-title">
                  <LocalPizza />
                  Porções
                </h3>
                <div className="recipe-meta-text">4 Porções</div>
              </div>
            </div>
            <footer className="recipe-footer">
              <a href="/recipes/1/" className="recipe-read-more">
                <Visibility />
                <span>Ver Receita</span>
              </a>
            </footer>
          </div>
        </div>
      </div>
    </HomeContainer>
  );
};

export default Home;

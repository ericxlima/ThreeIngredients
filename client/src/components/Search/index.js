import React from "react";

import SearchIcon from "@mui/icons-material/Search";

import { SearchContainer } from "./styles";

const Search = () => {
  return (
    <SearchContainer>
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
    </SearchContainer>
  );
};

export default Search;

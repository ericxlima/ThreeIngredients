import React from "react";

import CoffeeIcon from "@mui/icons-material/Coffee";

import { HeaderContainer } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <header className="main-header-container">
        <div className="main-header container">
          <a className="main-logo" href="/">
            <CoffeeIcon sx={{ fontSize: 40 }} />
            <h1 className="main-logo-text">Love Coffee</h1>
          </a>
        </div>
      </header>
    </HeaderContainer>
  );
};

export default Header;

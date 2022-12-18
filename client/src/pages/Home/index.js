import React from "react";
import { HomeContainer } from "./styles";
import CoffeeIcon from "@mui/icons-material/Coffee";

const Home = () => {
  return (
    <HomeContainer>
      <header class="main-header-container">
        <div className="main-header">
          <a class="main-logo" href="/">
            <CoffeeIcon sx={{ fontSize: 40 }} />
            <span class="main-logo-text">Love Coffee</span>
          </a>
        </div>
      </header>
    </HomeContainer>
  );
};

export default Home;

import React from "react";

import { FooterContainer } from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <footer className="main-footer">
        <div className="developer">
          <a
            href="https://github.com/ericxlima"
            target="_blank"
            rel="noreferrer noopener"
          >
            By Eric de Lima
          </a>
        </div>

        <div className="powered">
          <span>
            Powered by
            <a
              href="https://www.djangoproject.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Django
            </a>
            and
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noreferrer noopener"
            >
              React
            </a>
          </span>
        </div>
      </footer>
    </FooterContainer>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";

import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <Link to={"/"}>
        <LogoImg src={RMDBLogo} alt="rmdb-logo"></LogoImg>
      </Link>
      <TMDBLogoImg src={TMDBLogo} alt="rmdb-logo"></TMDBLogoImg>
    </Content>
  </Wrapper>
);

export default Header;

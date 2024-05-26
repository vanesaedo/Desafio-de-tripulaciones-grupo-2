import React from "react";
import Nav from "./Nav";
import LogoBlanco from "../../assets/BE_logo_blanco.jpeg"


const Header = () => {
  return <header className="header">
    <img src={LogoBlanco} alt="logo beyond education" />
    <Nav />
  </header>;
};

export default Header;

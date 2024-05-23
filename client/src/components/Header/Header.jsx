import React from "react";
import Nav from "./Nav";
import Logo from "../../assets/BE_logo.png";

const Header = () => {
  return <header>
    <img src={Logo} alt="" />
    <Nav />
  </header>;
};

export default Header;

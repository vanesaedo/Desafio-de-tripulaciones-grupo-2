import React from "react";
import Nav from "./Nav";
import Logo from "../../assets/logo.png";

const Header = () => {
  return <header className="header">
    <div>
    <img src={Logo} alt="logo beyond education" />
    
    </div>
    <Nav />
         
  </header>;
};

export default Header;

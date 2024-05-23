import React from "react";
import Login from "./Login";
import DatosPersonales from "./DatosPersonales/DatosPersonales";
import Buscador from "./Buscador/Buscador";

const Main = () => {
  return <main>
    <Login />
    <DatosPersonales/>
    <Buscador/>
  </main>;
};

export default Main;

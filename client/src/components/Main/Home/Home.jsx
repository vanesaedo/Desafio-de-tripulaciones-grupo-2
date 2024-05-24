import React from "react";
import Buscador from "./Buscador/Buscador";
import Pestañas from "./Pestañas"
import Servicios from "./Servicios"
import DatosPersonales from "./DatosPersonales";
import Interacciones from "./Interacciones";


const Home = () => {

  return <>
  <section className="home">
    <nav>
      <Buscador />
      <Pestañas />
  </nav>
     
    <DatosPersonales />
    <Servicios />
    <Interacciones />
    
 </section>
  </>
};

export default Home;

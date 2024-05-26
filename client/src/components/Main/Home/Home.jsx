import { useState } from "react";
import Buscador from "./Buscador/Buscador";
import Pestañas from "./Pestañas"
import Servicios from "./Servicios"
import DatosPersonales from "./DatosPersonales";
import Interacciones from "./Interacciones";

const Home = () => {
  const [ pestañaEnUso, setPestañaEnUso ] = useState() //Estado para dibujar la info de una u otra pestaña

  return <section className="home">
    
    <nav>
      <Buscador />
      <Pestañas setPestañaEnUso={setPestañaEnUso}/>
    <nav>
      
    <article>
      {pestañaEnUso == "datosPersonales"? <DatosPersonales /> : <></>}
      {pestañaEnUso == "servicios"? <Servicios /> : <></>}
      {pestañaEnUso == "interacciones"? <Interacciones /> : <></>
    <article>
       
  </section>;
     
};

export default Home;

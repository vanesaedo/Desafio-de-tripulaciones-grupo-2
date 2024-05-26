import React from "react";

const Buscador = () => {
  return <section id="buscador">
    
  <h2>Buscar alumno</h2>
  <form action="#">
    <label>Buscar alumno:</label>
    <input type="search" id="buscadoralumno" name="buscadoralumno" placeholder="email"/>
    <button>Buscar</button>
  </form>
  </section>
};

export default Buscador;

import React from "react";


const Buscador = () => {
  return   <section className="buscador">
  <form>
    <label for="buscadoralumno">Buscar alumno:</label>
    <input type="text" id="buscadoralumno" name="buscadoralumno" placeholder="email"/>
    <button>Buscar</button>
  </form>
  </section>
  
};

export default Buscador;

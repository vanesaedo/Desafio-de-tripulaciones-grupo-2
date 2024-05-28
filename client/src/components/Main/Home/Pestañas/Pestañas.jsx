import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


const Pestañas = ({ setPestañaEnUso }) => {
  function clickPestaña(pestaña) {
    setPestañaEnUso(pestaña);
  };

  return <>
  <section className="cabecera_estudiante">
    <div className="nombre_estudiante">
      <h3>Nombre del alumno</h3>
    </div>

    <Tabs value={pestaña} onChange={handleChange} textColor="secondary" indicatorColor="secondary" aria-label="secondary tabs example">
          <Tab onChange={() => clickPestaña("datosPersonales")}value="datospersonales" label="Datos Personales" />
          <Tab onChange={() => clickPestaña("interacciones")} className="boton-interacciones" value="interacciones" label="Interacciones" />
          <Tab onChange={() => clickPestaña("campañasContratadas")} className="boton-campañas-contratadas" value="contratos" label="Contratos" />
        </Tabs>

    <nav className="pestañas">
      <button onClick={() => clickPestaña("datosPersonales")} className="boton-datos-personales">DATOS PERSONALES</button>
      <button onClick={() => clickPestaña("servicios")} className="boton-servicios">SERVICIOS</button>
      <button onClick={() => clickPestaña("interacciones")} className="boton-interacciones">INTERACCIONES</button>
      <button onClick={() => clickPestaña("campañasContratadas")} className="boton-campañas-contratadas">CAMPAÑAS CONTRATADAS</button>
    </nav>
    </section>
  </> 
};



export default Pestañas;

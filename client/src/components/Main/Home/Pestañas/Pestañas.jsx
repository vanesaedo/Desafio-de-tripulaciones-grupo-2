import React from "react";
import axios from "axios";

const Pestañas = ({ setPestañaEnUso, DNIbuscado, setClienteBuscado }) => {

  function clickPestaña(pestaña) {
    setPestañaEnUso(pestaña);
    const url = `http://localhost:5000/api/info/${pestaña}?dni=${DNIbuscado}`
    console.log(pestaña)
    try {
      console.log(pestaña)
      const res = axios.get(url);
      if(pestaña == "datosPersonales") {
        res.then(response => setClienteBuscado(prev => {
          return {...prev, datosPersonales: response.data}
        }));
      } else if (pestaña == "servicios") {
        res.then(response => setClienteBuscado(prev => {
          return {...prev, servicios: response.data}
        }));
      } else if (pestaña == "interacciones") {
        res.then(response => setClienteBuscado(prev => {
          return {...prev, interacciones: response.data}
        }));
      } else {
        res.then(response => setClienteBuscado(prev => {
          return {...prev, contratos: response.data}
        }));
      }
    } catch {
      console.log("ERROR: NOT FOUND");
    }
  };

  return <>
    <section className="cabecera_estudiante">
      <div className="nombre_estudiante">
        <h3>Nombre del alumno</h3>
      </div>
      <nav className="pestañas">
        <button onClick={() => clickPestaña("datosPersonales")} className="boton-datos-personales">DATOS PERSONALES</button>
        <button onClick={() => clickPestaña("servicios")} className="boton-servicios">SERVICIOS</button>
        <button onClick={() => clickPestaña("interacciones")} className="boton-interacciones">INTERACCIONES</button>
        <button onClick={() => clickPestaña("contratos")} className="boton-campañas-contratadas">CONTRATOS</button>
      </nav>
    </section>
  </>
};

export default Pestañas;
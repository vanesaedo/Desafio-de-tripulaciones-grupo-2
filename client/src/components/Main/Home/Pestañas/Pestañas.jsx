import React from "react";

const Pestañas = ({setPestañaEnUso}) => {
  function clickPestaña (pestaña) {
    setPestañaEnUso(pestaña);
  };

  return <section className="pestañas">
    <button onClick={() => clickPestaña("datosPersonales")} className="boton-datos-personales">DATOS PERSONALES</button>
    <button onClick={() => clickPestaña("servicios")} className="boton-servicios">SERVICIOS</button>
    <button onClick={() => clickPestaña("interacciones")} className="boton-interacciones">INTERACCIONES</button>
    <button onClick={() => clickPestaña("contratos")} className="boton-campañas-contratadas">CONTRATOS</button>
  </section>;
};

export default Pestañas;

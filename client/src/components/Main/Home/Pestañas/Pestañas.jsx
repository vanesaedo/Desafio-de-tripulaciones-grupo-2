import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';





const Pestanas = ({ setPestanaEnUso }) => {
  const [ pestanaEnUso, setPestanaEnUso ] = useState(value);

  function clickPestana(value) {
    setPestanaEnUso(value);

  };

  return <>
    <section className="cabecera_estudiante">
      <div className="nombre_estudiante">
        <h3>Nombre del alumno</h3>
      </div>
      <nav className="pestañas">

        <Tabs value={pestana} onChange={handleChange} textColor="secondary" indicatorColor="secondary" aria-label="secondary tabs example">
          <Tab onChange={() => clickPestaña("datosPersonales")}value="datospersonales" label="Datos Personales" />
          <Tab onChange={() => clickPestaña("interacciones")} className="boton-interacciones" value="interacciones" label="Interacciones" />
          <Tab onChange={() => clickPestaña("campañasContratadas")} className="boton-campañas-contratadas" value="contratos" label="Contratos" />
        </Tabs>

        <ButtonGroup variant="text" aria-label="Basic button group">
          <Button onClick={() => clickPestaña("datosPersonales")} className="boton-datos-personales">Datos personales</Button>
          <Button onClick={() => clickPestaña("servicios")} className="boton-servicios">Preferencias</Button>
          <Button onClick={() => clickPestaña("interacciones")} className="boton-interacciones">Interacciones</Button>
          <Button onClick={() => clickPestaña("campañasContratadas")} className="boton-campañas-contratadas">Contratos</Button>
        </ButtonGroup>

      </nav>
    </section>
  </>
};

export default Pestañas;

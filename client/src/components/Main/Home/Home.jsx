import { useState } from "react";
import Buscador from "./Buscador/Buscador";
import Pestañas from "./Pestañas"
import Servicios from "./Servicios"
import DatosPersonales from "./DatosPersonales";
import Interacciones from "./Interacciones";
import Contratos from "./Contratos";

const Home = () => {
  const [ pestañaEnUso, setPestañaEnUso ] = useState(); //Estado para dibujar la info de una u otra pestaña
  const [ DNIbuscado, setDNIbuscado ] = useState();
  const [ clienteBuscado, setClienteBuscado ] = useState({
    datosPersonales: "",
    servicios: "",
    interacciones: "",
    contratos: ""
  });

  return <section className="home">
    <Buscador setDNIbuscado={setDNIbuscado} />
    <Pestañas setPestañaEnUso={setPestañaEnUso} DNIbuscado={DNIbuscado} setClienteBuscado={setClienteBuscado} />
    {pestañaEnUso == "datosPersonales"? <DatosPersonales clienteBuscado={clienteBuscado.datosPersonales} /> : <></>}
    {pestañaEnUso == "servicios"? <Servicios clienteBuscado={clienteBuscado.servicios} /> : <></>}
    {pestañaEnUso == "interacciones"? <Interacciones clienteBuscado={clienteBuscado.interacciones} /> : <></>}
    {pestañaEnUso == "contratos"? <Contratos clienteBuscado={clienteBuscado.contratos} /> : <></>}
  </section>;
};

export default Home;

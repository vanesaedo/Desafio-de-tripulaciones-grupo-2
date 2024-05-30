import { useState } from "react";
import Buscador from "./Buscador/Buscador";
import Windows from "./Windows"
import Servicios from "./Servicios"
import DatosPersonales from "./DatosPersonales";
import Interacciones from "./Interacciones";
import Contratos from "./Contratos";
import EventsCalendar from './Calendar/EventsCalendar';
import Avisos from "./Avisos";

const Home = () => {
  const [windowsEnUso, setWindowsEnUso] = useState(""); //Estado para dibujar la info de una u otra windows
  const [DNIbuscado, setDNIbuscado] = useState("");
  const [clienteBuscado, setClienteBuscado] = useState({
    datosPersonales: "",
    servicios: "",
    interacciones: "",
    contratos: ""
  });


  return <section className="home">

    <nav className="Buscador">
      <Buscador setDNIbuscado={setDNIbuscado} />
    </nav>

    <article className="App">
      <h1>Calendario</h1>
      <EventsCalendar />
    </article>

    {DNIbuscado && (
      <>
        <nav className="cabecera_estudiante">
          <Windows
            setWindowsEnUso={setWindowsEnUso}
            DNIbuscado={DNIbuscado}
            setClienteBuscado={setClienteBuscado}
          />
        </nav>
        {windowsEnUso === "datosPersonales" && (
          <DatosPersonales clienteBuscado={clienteBuscado.datosPersonales} />
        )}
        {windowsEnUso === "servicios" && (
          <Servicios clienteBuscado={clienteBuscado.servicios} />
        )}
        {windowsEnUso === "interacciones" && (
          <Interacciones clienteBuscado={clienteBuscado.interacciones} />
        )}
        {windowsEnUso === "contratos" && (
          <Contratos clienteBuscado={clienteBuscado.contratos} />
        )}
      </>
    )}
    <Avisos />
  </section>
 
};

export default Home;

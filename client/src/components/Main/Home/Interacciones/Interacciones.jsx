import { useState, useRef, useEffect } from "react";
import axios from "axios";

const Interacciones = ({ clienteBuscado, setClienteBuscado, DNIbuscado }) => {
  const [lanzarFecth, setLanzarFetch] = useState(0)
  let inputMotivo = useRef();
  let inputFecha = useRef();
  let inputObservaciones = useRef();
  const interacc = clienteBuscado

  useEffect(() => {
    const res = axios.get(`http://localhost:5000/api/info/interacciones?dni=${DNIbuscado}`)
    res.then(response => setClienteBuscado(prev => {
      return {...prev, interacciones: response.data}
    }));
    inputFecha.current.value = ""
    inputMotivo.current.value = ""
    inputObservaciones.current.value = ""
  }, [lanzarFecth])

  async function crearNuevaInteraccion() {
    try {
      await axios.post("http://localhost:5000/api/info/interacciones", {
      id_factura: interacc[0].id_factura,
      fecha: inputFecha.current.value,
      motivo: inputMotivo.current.value,
      comentarios: inputObservaciones.current.value
    })
    } catch (err) {
      console.log(err);
    throw err;
    } finally {
      //Que haga un nuevo fecth para que muestre los nuevos datos 
    }
    setLanzarFetch(lanzarFecth + 1)
  };

  return <section className="interacciones">
    <article>
      <h1>Historial de Interacciones</h1>
      <div>
        <button>Editar</button>
        <button>Generar PDF</button>
      </div>
    </article>

    {clienteBuscado ? clienteBuscado.map((elem, i) => <article key={i} className="interaccionesCard">
      <div>
        <div>
          <label>Motivo: </label>
          <select name="" defaultValue={elem.motivo} >
            <option value="Seguimiento">Seguimiento</option>
            <option value="Ofertas">Ofertas</option>
            <option value="Incidencias">Incidencias</option>
          </select>
        </div>
        <div>
          <label>Fecha: </label>
          <input type="text" defaultValue={elem.fecha} />
        </div>
      </div>
      <label>Observaciones: </label>
      <textarea name="Observaciones" defaultValue={elem.observaciones}></textarea>
    </article>) : <></>}

    <article className="crearNuevaInteraccion">
      <h3>Nueva interacción</h3>
      <div>
        <div>
          <label>Motivo: </label>
          <select name="" ref={inputMotivo}>
            <option value="Seguimiento">Seguimiento</option>
            <option value="Ofertas">Ofertas</option>
            <option value="Incidencias">Incidencias</option>
          </select>
        </div>
        <div>
          <label>Fecha: </label>
          <input type="text" ref={inputFecha} placeholder="DD-MM-AAAA" />
        </div>
      </div>
      <label>Observaciones: </label>
      <textarea name="Observaciones" ref={inputObservaciones}></textarea>
      <button onClick={() => crearNuevaInteraccion()}>Crear</button>
    </article>

  </section>;
};

export default Interacciones;

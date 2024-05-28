import React from "react";

const Servicios = ({ clienteBuscado }) => {
  return <section className="servicios">
    <h1>Servicios</h1>
    <article>
    {clienteBuscado? clienteBuscado.map(elem => <div>
      {elem.interes_alumno_bool == true? <input type="checkbox" name={elem.interes_alumno} checked/> : <input type="checkbox" name={elem.interes_alumno} />}
      <label htmlFor={elem.interes_alumno}>{elem.interes_alumno}</label>
    </div>) : <></>}
    </article>
    
    {/* <article>
      <div>
        <div>
          <input type="checkbox" name="Orientación vocacional" />
          <label>Orientación vocacional</label>
        </div>

        <div>
          <input type="checkbox" />
          <label>Año y trimestre escolar en el extranjero</label>
        </div>

        <div>
          <input type="checkbox" />
          <label>Selección de colegios en España</label>
        </div>

        <div>
          <input type="checkbox" />
          <label>Selección de colegios en España</label>
        </div>

        <div>
          <input type="checkbox" />
          <label>Estudiar en España: Grados y Postgrados</label>
        </div>

        <div>
          <input type="checkbox" />
          <label>Estudiar en el extranjero: Grados y Postgrados</label>
        </div>
      </div>

      <div>
        <div>
          <input type="checkbox" />
          <label>Preparación de exámenes</label>
        </div>

        <div>
          <input type="checkbox" />
          <label>Campamentos</label>
        </div>

        <div>
          <input type="checkbox" />
          <label>Cursos preuniversitarios</label>
        </div>

        <div>
          <input type="checkbox" />
          <label>Voluntariados</label>
        </div>

        <div>
          <input type="checkbox" />
          <label>Desarrollo personal</label>
        </div>
      </div>
    </article> */}
  </section>;
};

export default Servicios;

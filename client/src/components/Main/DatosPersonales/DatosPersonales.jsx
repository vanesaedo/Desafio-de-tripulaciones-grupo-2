import React from "react";

const DatosPersonales = () => {
  return <>
    <section>
      <h3>Datos personales</h3>
        
    <form id="datospersonales">
      <div>
      <button>Editar</button>
      <button>Generar pdf</button>
      </div>
      <div>
      <label for="nombre">Nombre:</label>
      <input type="text" name="nombre" id="nombre"/>

      <label for="Apellidos">Apellidos:</label>
      <input type="text" name="apellidos" id="apellidos"/>

      <label for="fechadenacimiento">Fecha de nacimiento:</label>
      <input type="text" name="fechadenacimiento" id="fechadenacimiento"/>

      <label for="identificacion">DNI/NIE:</label>
      <input type="text" name="identificacion" id="identificacion"/>

      <label for="nacionalidad">Nacionalidad:</label>
      <input type="text" name="nacionalidad" id="nacionalidad" />

      <label for="domicilio">Domicilio:</label>
      <input type="text" name="domicilio" id="domicilio"/>

      <label for="ciudad">Ciudad:</label>
      <input type="text" name="ciudad" id="ciudad" />

      <label for="provincia">Provincia:</label>
      <input type="text" name="provincia" id="provincia"/>

      <label for="pais">País:</label>
      <input type="text" name="pais" id="pais"/>

      <label for="cp">C.P.:</label>
      <input type="text" name="cp" id="cp"/>

      <label for="telefono">Teléfono:</label>
      <input type="text" name="telefono" id="telefono"/>

      <label for="fechadenacimiento">Fecha de nacimiento:</label>
      <input type="text" name="fechadenacimiento" id="fechadenacimiento"/>

      <label for="email">email:</label>
      <input type="text" name="email" id="email"/>

      <label for="colegio">Colegio:</label>
      <input type="text" name="colegio" id="colegio"/>

      <label for="fecharegistro">Fecha de registro:</label>
      <input type="text" name="fecharegistro" />

      <label for="persona">Persona que te recomendó Beyond Education:</label>
      <input type="text" name="persona" />
 
        </div>
      </form>
    </section >
  </>
};

export default DatosPersonales;

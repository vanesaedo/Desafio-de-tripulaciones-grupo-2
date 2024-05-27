const queries = {
    getUsers: `
    SELECT * FROM intereses;`,
    getUserByDNI: `
        SELECT 
            "alumnos".id_alumno,
            "alumnos".nombre AS nombre_alumno,
            "alumnos".apellidos AS apellido_alumno,
            "alumnos".fecha_nacimiento,
            "alumnos".dni,
            "alumnos".nacionalidad,
            "alumnos".ciudad,
            "alumnos".provincia,
            "alumnos".pais,
            "alumnos".codigo_postal,
            "alumnos".telefono,
            "alumnos".email,
            "alumnos".colegio,
            "alumnos".curso,
            "alumnos".fecha_registro,
            "alumnos".persona_recomendado,
            "representantes_alumnos".id_representante,
            "representantes_legales".nombre AS nombre_representante_legal,
            "representantes_legales".apellidos AS apellidos_representante_legal,
            "representantes_legales".profesion_empresa AS profesion_representante_legal,
            "representantes_legales".relacion_ette AS relacion_alumno_representante_legal,
            "representantes_legales".email AS email_representante_legal,
            "representantes_legales".telefono AS telefono_representante_legal,
            "datos_facturacion".nombre AS nombre_datos_facturacion,
            "datos_facturacion".apellidos AS apellidos_datos_facturacion,
            "datos_facturacion".domicilio AS domicilio_datos_facturacion,
            "datos_facturacion".codigo_postal AS codigo_postal_datos_facturacion,
            "datos_facturacion".ciudad AS ciudad_datos_facturacion,
            "datos_facturacion".provincia AS provincia_datos_facturacion,
            "datos_facturacion".pais AS pais_datos_facturacion,
            "datos_facturacion".dni AS dni_datos_facturacion,
            "datos_facturacion".email AS email_datos_facturacion,
            "facturas".id_factura,
            "facturas".precio AS precio_factura,
            "facturas".fecha AS fecha_factura,
            "lineas_factura".id_linea AS id_linea_factura,
            "lineas_factura".precio AS precio_linea_factura,
            "lineas_factura".fecha AS fecha_precio_linea_factura,
            "servicios_especificos".id_servicioes AS id_servicio_especifico,
            "servicios_especificos".nombre_servicio AS nombre_servicio,
            "paises".id_pais,
            "paises".nombre as pais,
            "historico_contactos".id_ultimo_contacto,
            "historico_contactos".fecha AS fecha_contacto,
            "historico_contactos".motivo AS motivo_contacto,
            "historico_contactos".comentarios AS comentarios_del_contacto,
            "paises".nombre AS pais,
            "intereses".id_interes,
            "intereses".id_serviciog AS id_interes_alumno,
            "servicios_generales".nombre_servicio AS interes_alumno,
            "intereses".interesado AS interes_alumno_bool
        FROM "alumnos"
        INNER JOIN "facturas" ON "facturas".id_alumno = "alumnos".id_alumno    
        INNER JOIN "historico_contactos" ON "historico_contactos".id_factura = "facturas".id_factura
        INNER JOIN "lineas_factura" ON "lineas_factura".id_factura = "facturas".id_factura
        INNER JOIN "servicios_especificos" ON "servicios_especificos".id_servicioes = "lineas_factura".id_servicioes
        INNER JOIN "paises" ON "paises".id_pais = "servicios_especificos".id_pais
        INNER JOIN "intereses" ON "intereses".id_alumno = "alumnos".id_alumno
        INNER JOIN "servicios_generales" ON "servicios_generales".id_serviciog = "intereses".id_serviciog
        INNER JOIN "referencias" ON "intereses".id_alumno = "alumnos".id_alumno
        INNER JOIN "datos_facturacion" ON "datos_facturacion".id_alumno = "alumnos".id_alumno
        INNER JOIN "representantes_alumnos" ON "representantes_alumnos".id_alumno = "alumnos".id_alumno
        INNER JOIN "representantes_legales" ON "representantes_legales".id_representante = "representantes_alumnos".id_representante
        WHERE "facturas".id_agente = 2 AND "alumnos".dni = $1;
`,
};
module.exports = queries;
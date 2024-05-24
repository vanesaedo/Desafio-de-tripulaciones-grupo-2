/**
 * @author Desafío de tripulaciones Grupo 2 
 */

require('dotenv').config();
require('./config/db_pgsql');

const express = require("express");
const jwt = require("jsonwebtoken");
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json()); // Para parsear el body de las peticiones
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client/dist'))); //se lanza la primera vez que se visita. SIRVE LA APLICACION DE REACT

// Rutas
const userRoutes = require("./routes/routes") // CREO QUE SE PUEDE BORRAR

const usersRouter = require('./routes/users'); //rutas usuario
const resourcesRouter = require('./routes/resources'); //rutas protegidas

//Middlewares
const error404 = require("./middlewares/error404");
const morgan = require("./middlewares/morgan");

app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));

app.use(cors());


/******RUTAS ******/

// http://localhost:3000/
app.get("/", (req, res) => {
  res.status(200).send("Estas en el Home");
});

// todas las peticiones que no sean a la api, va a redirir a la pagina principal
app.get("*", (req, res) => { res.sendFile(path.join(__dirname + '/client/dist/index.html')) });


//API
app.use('/api/user', userRoutes);
app.use('/api/test', (req, res) => { res.status(200).json({ status: "connected" }) })
app.use('/api/users', usersRouter); //Origen: Home
app.use('/api/resources', resourcesRouter);

app.use(error404);
app.use("*", error404); // Middleware que gestiona el error 404

// http://localhost:5000
app.listen(port, () => {
  console.log(`Example app listening on  http://localhost:${port}`);
});

//require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

// Rutas
const userRoutes = require("./routes/routes")

//Middlewares
app.use(express.json()); // Para parsear el body de las peticiones
const error404 = require("./middlewares/error404");
const morgan = require("./middlewares/morgan");

app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));


/******RUTAS ******/

// http://localhost:3000/
app.get("/", (req, res) => {
  res.status(200).send("Estas en el Home");
});

//API
app.use('/api/user',userRoutes);


app.use(error404);
app.use("*", error404); // Middleware que gestiona el error 404

// http://localhost:3000
app.listen(port, () => {
  console.log(`Example app listening on  http://localhost:${port}`);
});

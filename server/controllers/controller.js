const user = require('../models/model.js'); // Importar el modelo de la BBDD


// GET http://localhost:3000/user?email=hola@gmail.com --> por email
const getUser = async (req, res) => {
    const dni = req.query.dni; // {dni}
    let info = await collection.getUserByDNI(dni);
    res.status(200).json(info); // [] con todos los datos del cliente
};

const getUsers = async (req, res) => {
    const users = await user.getUsers();
    res.status(200).json({
        data: users
    });
}


module.exports = {
    getUser,
    getUsers,
}
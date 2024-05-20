const user = require('../models/model.js'); // Importar el modelo de la BBDD


// GET http://localhost:3000/user?email=hola@gmail.com --> por email
const getUser = async (req, res) => {
    let users;
    console.log(req.query.email);
    users = await user.getUserByEmail(req.query.email);
    res.status(200).json(users); 
}


// Crear entry por email
const createUser = async (req, res) => {
    const newUser = req.body; 
    const response = await user.createUser(newUser);
    res.status(201).json(newUser);
}


const updateUser = async (req, res) => {
    const modifiedUser = req.body; 
    const response = await user.updateUser(modifiedUser);
    res.status(200).json({
        "items_updated": response,
        data: modifiedUser
    },{
        message: `usuario creado: ${req.query.email}`
    });
}

const deleteUser = async (req, res) => {
    let users;
    if (req.query.email) {
        users = await user.getUserByEmail(req.query.email);
        if (users.length > 0) {
            deleted = await user.deleteUser(req.query.email); 
            res.status(200).json({message: `Se ha borrado ${req.query.email}`})
        }else{
            res.status(404).json("No se ha encontrado el User")
        }
    }
    else {
        res.status(404).json("No se ha encontrado el User")
    }
}

module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser
}
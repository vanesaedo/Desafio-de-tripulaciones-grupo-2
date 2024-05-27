const user = require('../models/model.js'); // Importar el modelo de la BBDD


// GET http://localhost:3000/api/user/datosPersonales?dni='12345678A'
const getPersonalData = async (req, res) => {
    const dni = req.query.dni; // {dni}
    let info = await user.getPersonalData(dni);
    res.status(200).json(info); // [] con todos los datos del cliente
};

const getServices = async (req, res) => {
    const dni = req.query.dni; // {dni}
    let info = await user.getServices(dni);
    res.status(200).json(info); // [] con todos los datos del cliente
};

const getInteractions = async (req, res) => {
    const dni = req.query.dni; // {dni}
    let info = await user.getInteractions(dni);
    res.status(200).json(info); // [] con todos los datos del cliente
};

const getContractedCampaigns = async (req, res) => {
    const dni = req.query.dni; // {dni}
    let info = await user.getContractedCampaigns(dni);
    res.status(200).json(info); // [] con todos los datos del cliente
};

const getUsers = async (req, res) => {
    const users = await user.getUsers();
    res.status(200).json({
        data: users
    });
}


module.exports = {
    getPersonalData,
    getServices,
    getInteractions,
    getContractedCampaigns,
    getUsers,
}
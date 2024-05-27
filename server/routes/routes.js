/**
 * @author Desafío de tripulaciones Grupo 2  
 * @exports routes 
 * @namespace routes 
 */

const express = require('express');
const userController = require("../controllers/controller");
const router = express.Router();

router.get('/?', userController.getUser);
router.get('/all', userController.getUsers);

module.exports = router;
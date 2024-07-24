// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { register, addPet } = require('../controllers/userController');
const autenticacion = require('../middleware/authMiddleware');

// Ruta de registro de usuario
router.post('/register', register);


router.post('/addPet', autenticacion, addPet);

module.exports = router;

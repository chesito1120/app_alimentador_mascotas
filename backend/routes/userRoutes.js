const express = require('express');
const router = express.Router();
const { register, login, addPet, addDeviceAndAlarmsToPet } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// Registro de usuario
router.post('/register', register);

// Login de usuario
router.post('/login', login);

// Agregar mascota
router.post('/addPet', authMiddleware, addPet);

// Agregar dispositivo y alarmas a la mascota
router.post('/addDeviceAndAlarmsToPet', authMiddleware, addDeviceAndAlarmsToPet);

module.exports = router;

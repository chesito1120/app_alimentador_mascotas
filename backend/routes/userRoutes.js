const express = require('express');
const { register, login, addPet, addDeviceToPet } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/addPet', authMiddleware, addPet);
router.post('/addDeviceToPet', authMiddleware, addDeviceToPet);

module.exports = router;

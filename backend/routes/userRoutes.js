// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { register, login, addPet } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.post('/addPet', authMiddleware, addPet);

module.exports = router;

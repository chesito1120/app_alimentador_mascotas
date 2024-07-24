// controllers/userController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async (req, res) => {
    const { name, apellido, email, telefono, password } = req.body;

    try {
        // Verificar si el usuario ya existe
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        // Crear nuevo usuario
        user = new User({
            name,  // Usa `name` aquí
            apellido,
            email,
            telefono,
            password,
        });

        // Encriptar la contraseña
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // Guardar el usuario
        await user.save();

        // Crear JWT
        const payload = {
            user: {
                id: user.id,
            },
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1h' },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (err) {
        console.error('Error during registration:', err.message);
        res.status(500).send('Server error');
    }
};

exports.addPet = async (req, res) => {
    const { nombre, edad, raza } = req.body;

    try {
        // Obtener el usuario autenticado
        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        // Agregar la mascota al usuario
        user.mascotas.push({ nombre, edad, raza });
        await user.save();

        res.json(user.mascotas);
    } catch (err) {
        console.error('Error adding pet:', err.message);
        res.status(500).send('Server error');
    }
};

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Registro de usuario
exports.register = async (req, res) => {
    const { name, apellido, email, telefono, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'El usuario ya existe' });
        }

        user = new User({ name, apellido, email, telefono, password });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();

        const payload = { user: { id: user.id } };
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (err) {
        console.error('Error durante el registro:', err.message);
        res.status(500).send('Error del servidor');
    }
};

// Login de usuario
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Credenciales inválidas' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Credenciales inválidas' });
        }

        const payload = { user: { id: user.id } };
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};

// Agregar mascota al usuario
exports.addPet = async (req, res) => {
    const { nombre, edad, raza } = req.body;

    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ msg: 'Usuario no encontrado' });
        }

        user.mascotas.push({ nombre, edad, raza });
        await user.save();
        res.json(user.mascotas);
    } catch (err) {
        console.error('Error al agregar la mascota:', err.message);
        res.status(500).send('Error del servidor');
    }
};

// Agregar dispositivo y alarmas a la mascota
exports.addDeviceAndAlarmsToPet = async (req, res) => {
    const { nombreMascota, dispositivo, alarmas } = req.body;

    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ msg: 'Usuario no encontrado' });
        }

        const pet = user.mascotas.find(p => p.nombre === nombreMascota);
        if (!pet) {
            return res.status(404).json({ msg: 'Mascota no encontrada' });
        }

        // Establecer el dispositivo
        pet.dispositivo = dispositivo;

        // Establecer las configuraciones del dispositivo, incluidas las alarmas
        pet.dispositivo.configuraciones = { alarmas };

        await user.save();
        res.json(pet);
    } catch (err) {
        console.error('Error al agregar dispositivo y alarmas:', err.message);
        res.status(500).send('Error del servidor');
    }
};

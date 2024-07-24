// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    telefono: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mascotas: [
        {
            nombre: {
                type: String,
                required: true
            },
            edad: {
                type: Number,
                required: true
            },
            raza: {
                type: String,
                required: true
            }
        }
    ],
    dispositivo: {
        // Añadir campos necesarios
    }
});

module.exports = mongoose.model('User', UserSchema);

const mongoose = require('mongoose');

const DeviceSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    tipo: { type: String, required: true },
    modelo: { type: String, required: true },
});

const PetSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    edad: { type: Number, required: true },
    raza: { type: String, required: true },
    dispositivos: [DeviceSchema]
});

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    apellido: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    telefono: { type: String, required: true },
    password: { type: String, required: true },
    mascotas: [PetSchema]
});

module.exports = mongoose.model('User', UserSchema);

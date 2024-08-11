const mongoose = require('mongoose');

// Esquema para los días de la semana
const DaySchema = new mongoose.Schema({
    hora: { type: String, required: true },
    gramaje: { type: Number, required: true },
    validar_comida: { type: Boolean, required: true }
});

// Esquema para las comidas del día
const MealSchema = new mongoose.Schema({
    dias: {
        dia1: [DaySchema],
        dia2: [DaySchema],
        dia3: [DaySchema],
        dia4: [DaySchema],
        dia5: [DaySchema],
        dia6: [DaySchema],
        dia7: [DaySchema]
    }
});

// Esquema para las alarmas
const AlarmSchema = new mongoose.Schema({
    desayuno: MealSchema,
    comida: MealSchema,
    cena: MealSchema
});

// Esquema para el dispositivo
const DeviceSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    tipo: { type: String, required: true },
    modelo: { type: String, required: true }
});

// Esquema para la mascota
const PetSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    edad: { type: Number, required: true },
    raza: { type: String, required: true },
    dispositivo: DeviceSchema, // Ahora solo tiene los campos necesarios
    alarmas: AlarmSchema // Alarmas se incluye directamente en la mascota
});

// Esquema para el usuario
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    apellido: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    telefono: { type: String, required: true },
    password: { type: String, required: true },
    mascotas: [PetSchema] // Array de mascotas
});

module.exports = mongoose.model('User', UserSchema);

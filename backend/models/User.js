const mongoose = require('mongoose');

const DaySchema = new mongoose.Schema({
    hora: { type: String, required: true },
    gramaje: { type: Number, required: true },
    validar_comida: { type: Boolean, required: true }
});

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

const AlarmSchema = new mongoose.Schema({
    desayuno: MealSchema,
    comida: MealSchema,
    cena: MealSchema
});

const DeviceSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    tipo: { type: String, required: true },
    modelo: { type: String, required: true }
});


const PetSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    edad: { type: Number, required: true },
    raza: { type: String, required: true },
    dispositivo: DeviceSchema,
    alarmas: AlarmSchema
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

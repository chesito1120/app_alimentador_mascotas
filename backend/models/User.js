const mongoose = require('mongoose');

const DiaSchema = new mongoose.Schema({
    hora: { type: String, required: true },
    gramaje: { type: Number, required: true },
    validar_comida: { type: Boolean, required: true }
});

const AlarmasSchema = new mongoose.Schema({
    desayuno: {
        dias: {
            dia1: [DiaSchema],
            dia2: [DiaSchema],
            dia3: [DiaSchema],
            dia4: [DiaSchema],
            dia5: [DiaSchema],
            dia6: [DiaSchema],
            dia7: [DiaSchema]
        }
    },
    comida: {
        dias: {
            dia1: [DiaSchema],
            dia2: [DiaSchema],
            dia3: [DiaSchema],
            dia4: [DiaSchema],
            dia5: [DiaSchema],
            dia6: [DiaSchema],
            dia7: [DiaSchema]
        }
    },
    cena: {
        dias: {
            dia1: [DiaSchema],
            dia2: [DiaSchema],
            dia3: [DiaSchema],
            dia4: [DiaSchema],
            dia5: [DiaSchema],
            dia6: [DiaSchema],
            dia7: [DiaSchema]
        }
    }
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
    dispositivos: [DeviceSchema],
    configuraciones: {
        alarmas: AlarmasSchema
    }
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

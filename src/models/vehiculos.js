const mongoose = require('mongoose');

const vehiculosSchema = new mongoose.Schema({
    marca: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    placa: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Vehiculos', vehiculosSchema);

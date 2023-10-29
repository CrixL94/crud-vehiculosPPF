const mongoose = require('mongoose');

const entradaSalidaSchema = new mongoose.Schema({
    vehiculo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vehiculos', // Referencia al modelo de vehículos
        required: true
    },
    motorista: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now,
        required: true
    },
    hora: {
        type: String,
        required: true
    },
    kilometraje: {
        type: Number,
        required: true
    },
    estado: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Estado', // Referencia al modelo de estados
        required: true
    }
});


module.exports = mongoose.model('EntradaSalida', entradaSalidaSchema);

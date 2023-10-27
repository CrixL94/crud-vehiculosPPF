const express = require('express');
const EntradaSalidaSchema = require("../models/entradaSalida")

const router = express.Router();

// Crear entrada/salida de vehículo
router.post('/post-entrada-salida', (req, res) => {
    const nuevaEntradaSalida = EntradaSalidaSchema(req.body);

    nuevaEntradaSalida
        .save()
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }));
});

// Obtener todas las entradas/salidas de vehículos
router.get('/get-entradas', (req, res) => {
    const entradaSalida = EntradaSalidaSchema
    entradaSalida
        .find()
        .populate('vehiculo')
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }));
});

module.exports = router;
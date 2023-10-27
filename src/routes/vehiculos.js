const express = require('express');
const vehiculosSchema = require("../models/vehiculos")

const router = express.Router();

// crear registro vehiculo
router.post('/vehiculos', (req, res) => {
    const vehiculo = vehiculosSchema(req.body);
    vehiculo
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Obtener todos los vehiculos
router.get('/get-vehiculos', (req, res) => {
    const vehiculo = vehiculosSchema;
    vehiculo
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Obtener un vehiculo por su id
router.get('/get-vehiculo/:id', (req, res) => {
    const { id } = req.params;
    vehiculosSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Actualizar un vehiculo
router.put('/update-vehiculo/:id', (req, res) => {
    const { id } = req.params;
    const { marca, modelo, placa } = req.body;
    vehiculosSchema
        .updateOne({ _id: id }, { $set: { marca, modelo, placa } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Eliminar un vehiculo
router.delete('/delete-vehiculo/:id', (req, res) => {
    const { id } = req.params;
    vehiculosSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


module.exports = router;
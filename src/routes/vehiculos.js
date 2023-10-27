const express = require('express');
const vehiculosSchema = require("../models/vehiculos")

const router = express.Router();

// crear registro vehiculo
/**
 * @swagger
 * components:
 *   schemas:
 *     Vehiculos:
 *       type: object
 *       properties:
 *         marca:
 *           type: string
 *         modelo:
 *           type: string
 *         placa:
 *           type: string
 *       required:
 *         - marca
 *         - modelo
 *         - placa
 *       example:
 *         marca: Toyota
 *         modelo: Corolla
 *         placa: HN521
 */

/**
 * @swagger
 * /api/vehiculos:
 *   post:
 *     summary: Crear un vehículo
 *     description: Crea un nuevo registro de vehículo.
 *     tags: [Vehiculos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Vehiculos'
 *     responses:
 *       200:
 *         description: Vehículo creado con éxito.
 *       400:
 *         description: Error en la solicitud.
 */
router.post('/vehiculos', (req, res) => {
    const vehiculo = vehiculosSchema(req.body);
    vehiculo
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Obtener todos los vehiculos
/**
 * @swagger
 * /api/get-vehiculos:
 *   get:
 *     summary: Obtener todos los vehiculos
 *     tags: [Vehiculos]
 *     responses:
 *       200:
 *         description: Datos Obtenidos correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Vehiculos'
 */
router.get('/get-vehiculos', (req, res) => {
    const vehiculo = vehiculosSchema;
    vehiculo
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Obtener un vehiculo por su id
/**
 * @swagger
 * /api/get-vehiculo/{id}:
 *   get:
 *     summary: Obtener vehiculo por ID
 *     tags: [Vehiculos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Vehiculo obtenido correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Vehiculos'
 *       404:
 *         description: Vehiculo no encontrado
 */
router.get('/get-vehiculo/:id', (req, res) => {
    const { id } = req.params;
    vehiculosSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Actualizar un vehiculo
/**
 * @swagger
 * /api/update-vehiculo/{id}:
 *   put:
 *     summary: Actualizar vehiculo
 *     tags: [Vehiculos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
*     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Vehiculos'
 *     responses:
 *       200:
 *         description: Registro Actualizado
 *       404:
 *         description: Vehiculo no encontrado
 */
router.put('/update-vehiculo/:id', (req, res) => {
    const { id } = req.params;
    const { marca, modelo, placa } = req.body;
    vehiculosSchema
        .updateOne({ _id: id }, { $set: { marca, modelo, placa } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Eliminar un vehiculo
/**
 * @swagger
 * /api/delete-vehiculo/{id}:
 *   delete:
 *     summary: Borrar vehiculo por ID
 *     tags: [Vehiculos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Registro borrado
 *       404:
 *         description: Vehiculo no encontrado
 */
router.delete('/delete-vehiculo/:id', (req, res) => {
    const { id } = req.params;
    vehiculosSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


module.exports = router;
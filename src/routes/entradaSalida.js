const express = require('express');
const EntradaSalidaSchema = require("../models/entradaSalida")

const router = express.Router();

// Crear entrada/salida de vehículo
/**
 * @swagger
 * components:
 *   schemas:
 *     entradaSalida:
 *       type: object
 *       properties:
 *         vehiculo:
 *           type: string
 *         motorista:
 *           type: string
 *         fecha:
 *           type: Date
 *         hora:
 *           type: string
 *         kilometraje:
 *           type: number
 *         estado:
 *           type: string
 *       required:
 *         - vehiculo
 *         - motorista
 *         - fecha
 *         - hora
 *         - kilometraje
 *         - estado
 *       example:
 *         vehiculo: 653b27cfb94bc60ed0ec8c95
 *         motorista: Juan Perez
 *         fecha: 2023-10-27
 *         hora: 10:00 AM
 *         kilometraje: 1000
 *         estado: Entrada
 */

/**
 * @swagger
 * /api/post-entrada-salida:
 *   post:
 *     summary: Crear un registro de entrada o salida
 *     description: Crear un registro de Entrada o salida de un vehiculo
 *     tags: [entradaSalida]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/entradaSalida'
 *     responses:
 *       200:
 *         description: Registro creado con éxito.
 *       400:
 *         description: Error en la solicitud.
 */
router.post('/post-entrada-salida', (req, res) => {
    const nuevaEntradaSalida = EntradaSalidaSchema(req.body);

    nuevaEntradaSalida
        .save()
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }));
});

// Obtener todas las entradas/salidas de vehículos
/**
 * @swagger
 * /api/get-entradas:
 *   get:
 *     summary: Obtener todos los vehiculos
 *     tags: [entradaSalida]
 *     responses:
 *       200:
 *         description: Datos Obtenidos correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/entradaSalida'
 */
router.get('/get-entradas', (req, res) => {
    const entradaSalida = EntradaSalidaSchema
    entradaSalida
        .find()
        .populate('vehiculo')
        .populate('estado')
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }));
});

module.exports = router;
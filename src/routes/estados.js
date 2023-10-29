const express = require('express');
const estadosSchema = require("../models/estados")

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Estado:
 *       type: object
 *       properties:
 *         nombreEstado:
 *           type: string
 *       required:
 *         - nombreEstado
 *       example:
 *         nombreEstado: Entrada
 */

/**
 * @swagger
 * /api/get-estados:
 *   get:
 *     summary: Obtener todos los estados.
 *     tags: [estados]
 *     responses:
 *       200:
 *         description: Datos de estados obtenidos correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Estado'
 */

router.get('/get-estados', async (req, res) => {
    const estados = estadosSchema;
    estados
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

/**
 * @swagger
 * /api/post-estado:
 *   post:
 *     summary: Crear un nuevo estado.
 *     description: Crear un nuevo estado con nombre.
 *     tags: [estados]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Estado'
 *     responses:
 *       200:
 *         description: Estado creado con éxito.
 *       400:
 *         description: Error en la solicitud.
 */

router.post('/post-estado', (req, res) => {
    const estado = estadosSchema(req.body);
    estado
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;
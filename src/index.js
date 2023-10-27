const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const vehiculosRoutes = require("./routes/vehiculos")
const entradasSalidasRoutes = require("./routes/entradaSalida");

const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use('/api', vehiculosRoutes);
app.use('/api', entradasSalidasRoutes);

//routes
app.get('/', (req, res) => {
    res.send('Bienvenido')
})

//coneccion a mongodb
mongoose.connect(process.env.MONGODB_URI).then(() => console.log("conectado a la base de datos"))
    .catch((error) => console.error(error));

app.listen(port, () => console.log("Servidor en ejecucion en el puerto", port));
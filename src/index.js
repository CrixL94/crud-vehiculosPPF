const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

//routes
app.get('/', (req, res) => {
    res.send('Bienvenido')
})

//coneccion a mongodb
mongoose.connect(process.env.MONGODB_URI).then(() => console.log("conectado a la base de datos"))
    .catch((error) => console.error(error));

app.listen(port, () => console.log("Servidor en ejecucion en el puerto", port));
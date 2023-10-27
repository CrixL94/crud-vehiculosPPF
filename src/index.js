const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const vehiculosRoutes = require("./routes/vehiculos")
const entradasSalidasRoutes = require("./routes/entradaSalida");
const path = require("path");

//Swagger
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API CRUD Prueba PPF",
            version: "1.0.0"
        },
        servers: [{
            url: 'http://localhost:9000'
        }]
    },
    apis: [`${path.join(__dirname, "./routes/*.js")}`]
}

//cofiguraciones
const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use('/api', vehiculosRoutes);
app.use('/api', entradasSalidasRoutes);
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)))

//routes
app.get('/', (req, res) => {
    res.redirect('/api-doc/');
})

//coneccion a mongodb
mongoose.connect(process.env.MONGODB_URI).then(() => console.log("conectado a la base de datos"))
    .catch((error) => console.error(error));

app.listen(port, () => console.log("Servidor en ejecucion en el puerto", port));
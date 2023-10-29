const mongoose = require('mongoose');

const estadosSchema = new mongoose.Schema({
    nombreEstado: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Estado', estadosSchema);

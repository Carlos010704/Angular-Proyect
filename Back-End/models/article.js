'use strict'

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ArticulosSquema = Schema({
    title: String,
    content: String,
    date: { type: Date, default: Date.now },
    image: String
});

module.exports = mongoose.model('Article', ArticulosSquema);
// Articles --> Guarda documentos d eeste tipo y estructura dentro de la coleccion.
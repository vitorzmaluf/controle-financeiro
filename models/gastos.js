const mongoose = require('../database/mongo');

const gastosSchema = new monogoose.Schema({
    name: String,
    price: Number,
    date: { type:Date, default: Date.now },
});

const Gastos = mongoose.model('Gastos', gastosSchema);

module.exports = exports = Gastos;
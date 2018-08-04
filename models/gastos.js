const mongoose = require('../database/mongo');

const gastosSchema = new mongoose.Schema({
    name: String,
    price: Number,
    date: { type:Date, default: Date.now },
});

const Gasto = mongoose.model('Gastos', gastosSchema);

module.exports = exports = Gasto;
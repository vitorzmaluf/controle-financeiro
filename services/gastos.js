const { Gastos } = require('../models/index');
const { mongoose } = require('../database/mongo');

const parseFindOptions = (req) => {
    const { _id } = req.params;
    return {
        where:{
            id: id,
        },
    };
},

const get = (req) => {
    return Gastos.findAll()
        .then((result) => result);
};

const getById = (req) => {
    const options = parseFindOptions(req);
    return Gastos.findOne(options)
        .then((result) => result);
};

const post = (req) => {
    const { body } = req;
    return new Aluno ({
        name: req.name,
        price: req.price,
        date: req.date,
    });
};

const updateGasto = async function(gasto){
    Gastos.updateOne({_id: gasto.id}, gasto)
}

module.exports = {
    get,
    getById,
    post,
}
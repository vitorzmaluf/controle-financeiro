const { Gasto } = require('../models/index');
const { mongoose } = require('../database/mongo');

const parseFindOptions = (req) => {
    const { _id } = req.params;
    return {
            _id
        };
};

const get = (req) => {
    return Gasto.find(function(err, result) {
        if (err){
            console.log('err');
        }
        else {
            console.log('ok');
        }
    })
};


const getById = (req) => {
    const options = parseFindOptions(req);
    return Gasto.findOne(options)
        .then((result) => result);
};

const post = (req) => {
    const { body } = req;
    const gasto = new Gasto ({
        name: body.name,
        price: body.price,
        date: body.date,
    });
    return Gasto.create(gasto)
        .then(result => result)
};

const updateGasto = async function(gasto){
    Gastos.updateOne({_id: gasto.id}, gasto)
}

module.exports = {
    get,
    getById,
    post,
}
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

const put = (req) => {
    const { body } = req;
    const options = parseFindOptions(req);

    const gasto = new Gasto ({
        _id: body._id,
        name: body.name,
        price: body.price,
        date: body.date,
    })
    return Gasto.updateOne({_id: gasto._id}, gasto)
        .then(result => result)
};

const exclude = (req) => {
    const options = parseFindOptions(req);
    return Gasto.deleteOne(options)
        .then((result) => result);
};

module.exports = {
    get,
    getById,
    post,
    put,
    exclude,
}
const service = require('../services/gastos');

const get = (req, res) => {
    return service.get(req)
        .then((result) => {
            res.send(result);
        })
};

const getById = (req, res) => {
    return service.getById(req)
        .then((result) => {
            res.send(result);
        })
}

const post = (req, res) => {
    return service.post(req)
     .then((result) => {
         res.send(result)
     })
     .catch((error) => res.status(500).send(error))
}

module.exports = {
    get,
    getById,
    post,
}
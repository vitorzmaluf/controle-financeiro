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
}

const put = (req, res) => {
    return service.put(req)
        .then((result) => {
            res.send(result)
        })
}

const exclude = (req, res) => {
    return service.exclude(req)
        .then((result) => {
            res.send(result)
        })
}

module.exports = {
    get,
    getById,
    post,
    put,
    exclude,
}
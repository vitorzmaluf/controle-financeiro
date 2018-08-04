const router = require('express').Router();

router.use('/gastos', require('./gastos'));

module.exports = router;
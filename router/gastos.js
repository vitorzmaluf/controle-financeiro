const router = require('express').Router();
const ctrl = require('../controllers/gastos');

router.get('/', ctrl.get);
router.post('/', ctrl.post);
router.get('/:_id', ctrl.getById);
router.put('/', ctrl.put);
router.delete('/:_id', ctrl.exclude);

module.exports = router;
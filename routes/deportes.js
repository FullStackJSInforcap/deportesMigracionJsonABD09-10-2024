const {Router} = require('express');
const { findAllController, findByIdController, insertController, updateController, deleteByIdController } = require('../controllers/deportes');

const router = Router();

router.get('/', findAllController);

router.get('/findById', findByIdController);

router.post('/insert', insertController);

router.post('/update', updateController);

router.get('/deleteById', deleteByIdController);

module.exports = router;
const {Router} = require('express');
const { findAllController, findByIdController, insertController, updateController, deleteByIdController, preInsertController, preUpdateController } = require('../controllers/deportes');

const router = Router();

router.get('/', findAllController);

router.get('/findById', findByIdController);

router.get('/insert', preInsertController);

router.post('/insert', insertController);

router.get('/update', preUpdateController);

router.post('/update', updateController);

router.get('/deleteById', deleteByIdController);

module.exports = router;
const express = require ('express');
const router = express.Router();

const atm = require('../controllers/atm.controller');

router.get('/', atm.getAtm);
router.get('/', atm.getPlaylisy);
router.post('/', atm.createAtm);
router.get('/:id', atm.getOneAtm);
router.put('/:id', atm.editAtm);
router.delete('/:id', atm.deleteAtm);

module.exports = router;
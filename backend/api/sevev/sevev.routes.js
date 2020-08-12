const express = require('express');
const {
  getSevevs,
  getSevev,
  addSevev,
  deleteSevev,
  updateSevev,
} = require('./sevev.controller');
const router = express.Router();

router.get('/', getSevevs);
router.get('/:id', getSevev);
router.post('/', addSevev);
router.put('/:id', updateSevev);
router.delete('/:id', deleteSevev);

module.exports = router;

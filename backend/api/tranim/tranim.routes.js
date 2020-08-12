const express = require('express');
const {
  getTranims,
  getTranim,
  addTranim,
  deleteTranim,
  updateTranim,
} = require('./Tranim.controller');
const router = express.Router();

router.get('/', getTranims);
router.get('/:id', getTranim);
router.post('/', addTranim);
router.put('/:id', updateTranim);
router.delete('/:id', deleteTranim);

module.exports = router;

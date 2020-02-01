const express = require('express');
const router = express.Router();
const student2Controller = require('../controllers/student2');
router.get('/', student2Controller.student2);
module.exports = router;

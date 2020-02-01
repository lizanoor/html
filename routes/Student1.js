const express = require('express');
const router = express.Router();
const student1Controller = require('../controllers/student1');
router.get('/', student1Controller.student1);
module.exports = router;

//routes/contacts.js
const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');
router.get('/contacts', contactsController.listContacts);
module.exports = router;

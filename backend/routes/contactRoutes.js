const express = require('express');
const router = express.Router();
const { createContact ,checkEmailExists, getContacts} = require('../controllers/contactControllers');

// POST - Create a new contact submission
router.post('/', createContact);
router.post('/calltoaction', createContact);
router.post('/achievers',createContact);
router.post('/plans',createContact);
router.post('/youtube',createContact);
router.get('/check-email',checkEmailExists);
router.get('/allContacts',getContacts);
module.exports = router;
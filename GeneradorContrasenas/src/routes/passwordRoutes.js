const express = require('express');
const { createPassword } = require('../../app/controllers/passwordControllers');

const router = express.Router();

router.post('/generate', createPassword);

module.exports = router;
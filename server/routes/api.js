const express = require('express');
const router = express.Router();

router.use('/todos', require('./todos'));

module.exports = router;

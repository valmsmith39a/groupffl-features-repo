const express = require('express');
const router = express.Router();

router.use('/league', require('./league'));
router.use('/team', require('./team'));
router.use('/user', require('./user'));

module.exports = router;

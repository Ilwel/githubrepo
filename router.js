const express = require('express');
const router = express();
const user = require('./controllers/user');

router.get('/user/:user', user.getUser);

module.exports = router;
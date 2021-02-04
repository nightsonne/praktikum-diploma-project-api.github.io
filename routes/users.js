const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { findUser } = require('../controllers/users.js');
const auth = require('../middlewares/auth');

router.get('/me', auth, findUser);

module.exports = router;

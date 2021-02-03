const router = require('express').Router();

const usersRouter = require('./users');
const articlesRouter = require('./articles');
const signRouter = require('./sign');
const auth = require('../middlewares/auth');
const NotFound = require('../errors/notfound');

router.use('/', signRouter);
router.use('/users', usersRouter);
router.use('/articles', articlesRouter);

router.use('/*', auth, (req, res, next) => (next(new NotFound('404 - страница не найдена'))));

module.exports = router;

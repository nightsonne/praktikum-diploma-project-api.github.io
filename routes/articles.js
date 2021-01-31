const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { findArticle, deleteArticle, createArticle } = require('../controllers/articles');
const auth = require('../middlewares/auth');

router.get('/', auth, findArticle);

router.post('/', celebrate({
  body: Joi.object().keys({
    keyword: Joi.string().required(),
    title: Joi.string().required(),
    text: Joi.string().required(),
    date: Joi.string().required(),
    source: Joi.string().required(),
    link: Joi.string().required().uri(),
    image: Joi.string().required().regex(/^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|png)/),
  }),
}), auth, createArticle);

router.delete('/:id', celebrate({
  params: Joi.object().keys({
    id: Joi.string().length(24).hex(),
  }),
}), auth, deleteArticle);

module.exports = router;

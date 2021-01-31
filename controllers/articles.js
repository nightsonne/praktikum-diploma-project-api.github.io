const Article = require('../models/article');
const NotFound = require('../errors/notfound');
const Forbidden = require('../errors/forbidden');

module.exports.findArticle = (req, res, next) => {
  Article.find({ owner: req.user._id })
    .then((article) => res.send({ data: article }))
    .catch(next);
};

module.exports.deleteArticle = (req, res, next) => {
  Article.findById(req.params.id)
    .then((article) => {
      if (article) {
        if (article.owner.toString() === req.user._id.toString()) {
          Article.findByIdAndRemove(req.params.id)
            .then((item) => res.status(200).send({ data: item }))
            .catch(next);
        } else {
          throw new Forbidden('Вы не можете удалять чужие статьи');
        }
      } else {
        throw new NotFound('Произошла ошибка при поиске статьи');
      }
    })
    .catch(next);
};

module.exports.createArticle = (req, res, next) => {
  const {
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
  } = req.body;

  Article.create({
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
    owner: req.user._id,
  })
    .then((article) => res.status(200).send({ data: article }))
    .catch(next);
};

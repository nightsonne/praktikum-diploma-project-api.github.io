const { NODE_ENV, DATA_BASE } = process.env;

const mongoLink = NODE_ENV === 'production' ? DATA_BASE : 'mongodb://localhost:27017/newsdb';

const mongoConfig = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

module.exports = {
  mongoLink,
  mongoConfig,
};

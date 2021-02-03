const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const helmet = require('helmet');
const { errors } = require('celebrate');

const { requestLogger, errorLogger } = require('./middlewares/loggers');
const { mongoLink, mongoConfig } = require('./config/mongo');
const { commonError } = require('./middlewares/commonerror');
const routes = require('./routes/index');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect(mongoLink, mongoConfig);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(requestLogger);
app.use(routes);
app.use(errorLogger);
app.use(errors());
app.use(commonError);

app.listen(PORT);

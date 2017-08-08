'use strict';

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const debug = require('debug')('app:server.js');

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.load();
mongoose.connect(process.env.MONGODB_URI);

app.use(morgan('dev'));
app.use(cors());

app.listen(PORT, () => {
  debug('Active on port: ', PORT);
});
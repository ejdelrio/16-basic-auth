'use strict';

const express = require('express');
const debug = require('debug')('app:server.js');


const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  debug('Active on port: ', PORT);
});
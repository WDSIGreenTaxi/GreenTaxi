'use strict';
require('dotenv').config({ silent: true });
const express      = require('express');
const logger       = require('morgan');
const path         = require('path');
const bodyParser   = require('body-parser');

const app          = express();
const PORT         = process.argv[2] || process.env.PORT || 3000;

const loc = require('./models/location.js');

app.use(logger('dev'));
app.use(bodyParser.json());

app.post('/location',
  loc.getDistance,
  loc.getWeatherData,
  loc.prepareResponse,
  (req, res) => {
    res.json(res.data);
  });

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(PORT, () => console.warn(`Server here! Listening on port ${PORT}!`));

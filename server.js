/* eslint-disable no-unused-vars */
const express = require('express');
const serveStatic = require('serve-static');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(serveStatic(`${__dirname}/dist`));

// middlewares
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.post('/api', async (req, res) => {
  console.log(req.body.query);
  await axios.get(`https://www.omdbapi.com/?t=${req.body.query}&apikey=79fcb6d0`)
    .then((response) => {
      const apiResponse = response.data;
      console.log(apiResponse);
      res.send(
        [{
          status: true,
          movie: apiResponse,
        }],
      );
    })
    .catch((e) => {
      const error = e.message;
      res.send(
        [{
          status: false,
          error,
        }],
      );
    });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

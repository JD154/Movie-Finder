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

app.post('/findmovie', (req, res) => {
  console.log(req.body.query);
  let apiResponse;
  let errors;

  axios.get(`https://www.omdbapi.com/?t=${req.body.query}&apikey=79fcb6d0`)
    .then((response) => {
      apiResponse = response.data;
      console.log(apiResponse);
    })
    .catch((e) => {
      errors = e.message;
    })
    .finally(() => {
      res.send(
        [{
          movie: apiResponse,
        }],
      );
    });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

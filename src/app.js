const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(require('./controllers/authController'));


app.use(express.static('./src/public'));

module.exports = app;
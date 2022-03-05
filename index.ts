const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8080, function () {
    console.log('Server Started');
});
app.get('/', function (req, res) {
    res.render('index');
});
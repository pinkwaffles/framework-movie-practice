const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../client/dist')));

var placeholder = [
  {title: 'Mean Girls', watched: false},
  {title: 'Hackers', watched: false},
  {title: 'The Grey', watched: false},
  {title: 'Sunshine', watched: false},
  {title: 'Ex Machina', watched: false},
];

app.get('/movies', (req, res) => {
	res.status(200).send(placeholder);
});

app.post('/movie', (req, res) => {
	console.log(req.body.title);
	placeholder.push({title: req.body.title, watched: false});
	res.status(200);
	res.send();
});

app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });
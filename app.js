var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var chalk = require('chalk');
var app = express();
var port = 3000;
var database = {
  people: [
    {
      name: 'Hank',
      fact: 'Talks too much'
    }
  ]
};

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/person', function(request, response) {
  response.send(database);
});

app.post('/person', function(request, response) {
  database.people.push(request.body);
  response.sendStatus(200);
});

app.get('/*', function catchall(request, response) {
  var file = request.params[0] || 'views/index.html';
  response.sendFile(path.join(__dirname, `/public/${file}`));
});

app.listen(port);

console.log('listening on port ' + port);

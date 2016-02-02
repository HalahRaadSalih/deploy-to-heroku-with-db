var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var methodOverride = require('method-override');
var router = require('./controllers/router');

var app = express();

// middleware
app.use(express.static('assests'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
	extended: true}
	));
app.use(morgan('tiny'));
app.use(methodOverride('_method'));

app.use('/', router);

var server = app.listen(process.env.PORT || 3000, function () {
var port = server.address().port;
  console.log('Server up and listening on', port);
});

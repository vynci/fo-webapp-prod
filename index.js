var express  = require('express');
var app      = express();                               // create our app w/ express
var morgan = require('morgan');             // log requests to the console (express4)
var path  = require('path');
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var port = Number(process.env.PORT || 8000);
// configuration =================

app.use(express.static(__dirname + '/dist'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

var renderIndex = function(req, res){
    console.log(__dirname);
    res.sendFile(path.resolve(__dirname, __dirname + '/dist/index.html'));
}

app.get('/*', renderIndex);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port ", port);


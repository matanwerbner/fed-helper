var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

// app.use(express.static(__dirname + '/public'));

// // views is directory for all template files
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

var urls = [
	{ url: 'matan.com', json: { value: 'matan' }},
	{ url: 'yosi.com', json: { value: 'yosi' }}
]

app.get('/', function(req, res) {
	res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    console.log('looking for ' + req.query.url);
    var jsonResult = urls.find((u) => u.url == req.query.url);

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(jsonResult));
});

app.get('/urls', function(req, res) {
	res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    var response = urls.map((u) => u.url);

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ urls: response }));
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

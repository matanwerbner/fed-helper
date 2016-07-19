var express = require('express');
var url = require('url');
var app = express();

app.set('port', (process.env.PORT || 5000));

// app.use(express.static(__dirname + '/public'));

// // views is directory for all template files
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

app.get('/', function(request, res) {
	var url_parts = url.parse(request.url, true);
	var query = url_parts.query;
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ url: query }));
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

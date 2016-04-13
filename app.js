var express = require('express');

var app = express();

console.log('server starting');

app.get('/', function(req, res){
    res.send('Hello from inside a container my first app!');
});

app.listen(8080);

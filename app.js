var express = require("express");

var app = express();

var port = 5050;

app.use(expres.static('public'));

app.get('/', function(req, res){
   res.send("hello world! songuard!") ;
});   

app.get('/songs', function(req, res){
   res.send("songs listed here!") ;
});   

app.listen(port, function(err){
    console.log('running server on port ' + port);
});


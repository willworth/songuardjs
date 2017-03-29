var express = require("express");

var app = express();

var port = 5050;


app.get('/', function(req, res){
   res.send("hello world! songuard!") ;
});   

app.listen(port, function(err){
    console.log('running server on port ' + port);
});


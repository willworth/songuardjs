var express = require("express");

var app = express();

var port = 5050;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function(req, res){
   res.send("hello world! songuard!") ;
});   

app.get('/songs', function(req, res){
   res.send("songs listed here!") ;
});   

app.listen(port, function(err){
    console.log('running server on port ' + port);
    console.log('Handy link: http://localhost:5050/ ');


    
});


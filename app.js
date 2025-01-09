var express = require('express');
var app = express();
app.get('/home',function(req,res){
    res.send('text response');
});

app.get('/user',function (req,res){
var user = {
    name:'filan',
    surname:'fisteku'
}
res.send('pershendetje '+ user.name  + ' '+ user.surname)
});

app.listen('8080')
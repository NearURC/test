var express= require("express");

var app = express();

app.get("/", function(req, res){
    res.send("H there, welcome to my assignment!");
    //console.log("HI!!!!!");
});

app.get("/speak/pig",function(req,res){
    res.send("The pig says :'Oink!'");
});

app.get("/speak/cow",function(req,res){
    res.send("The pig says :'Mooo!'");
});

app.get("/speak/dog",function(req,res){
    res.send("The pig says :'Woof, woof!'");
});

app.get("/repeat/:phrase/:number",function(req,res){
    var toSend= "";
    for(var i = 0 ; i < req.params.number ; i++)
    toSend += " " + req.params.phrase;
    res.send(toSend);
});

app.listen(process.env.PORT, process.env.IP);
console.log("ciaociaociao");
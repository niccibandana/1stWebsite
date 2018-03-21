//create a variable called express
//notify that app that it needs express frame work 
var express = require("express");
//bootstrap the app to express 
var app=express();
//run this app on port 3000
var port=3000;

//binding root context localhost:3000
//to GET method that responds with index.html file
//req - HHTP req made by client 
// res - HTTP response 
app.get("/", (req, res) => {
    //sendFile is a method in express framework that sends file back
    //to the client
    res.sendFile(__dirname + "/index.html");

//informing your app to listen to port number you have provided on top
app.listen(port, () =>{
    console.log("Server listening on port" + port);
});

});
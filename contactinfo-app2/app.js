//create a variable called express
//notify that app that it needs express frame work 
var express = require("express");
//bootstrap the app to express 
var app=express();
//run this app on port 3000
var port=3000;

//body parser is a module in express package that helps apps
//parse data in http req body 

var bodyParser =require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//create a variable called mongoose
//notify the app that it needs mongoose framework 

var mongoose= require("mongoose");
mongoose.Promise = global.Promise;


//connect the app to the db in the specified location
mongoose.connect("mongodb://localhost:27017/contactApp")
//create a variable for document schema
var contactSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    created_at: {Date, default: Date.now()}
});

var Contact = mongoose.model("ContactInfo", contactSchema);

//binding root context localhost:3000
//to GET method that responds with index.html file
//req - HHTP req made by client 
// res - HTTP response 
app.get("/", (req, res) => {
    //sendFile is a method in express framework that sends file back
    //to the client
    res.sendFile(__dirname + "/index.html");
});
app.get("/style.css", (req, res) =>{
    //sendFile is a mehtod in express framework that sends file back 
    //to client
    res.sendFile(__dirname + "/style.css")
});
app.post("/saveContact", (req, res)=> {
    console.log("My request" + req);
    console.log("My request body" + req.body);
    var myData= new Contact(req.body);
    myData.save()
        .then(item => {
            res.send("Name saved to database")
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        })
})

//informing your app to listen to port number you have provided on top
app.listen(port, () =>{
    console.log("Server listening on port" + port);
});


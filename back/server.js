var express= require('express');
var mongoose=require('mongoose');
var app=express();
var bodyparser=require('body-parser')
var cors=require('cors');

mongoose.connect("mongodb://localhost:27017/login",function(err,res)
{   
    if(res)
    console.log("Successfully connected to mongodb");
})


app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cors());

var route=require('./routes.js');
app.use('/api/mydb',route);
app.listen(3000,()=>{
    console.log("Connected to port 3000")
})

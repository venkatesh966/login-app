var express=require('express');
var NodeGeocoder = require('node-geocoder');
var route=express.Router();
var mydb=require('./model.js');

route.get('/',function(req,res){

    mydb.getData(function(err,data){
        if(err) throw err;
        res.json(data);
    })
})

route.post('/weather',function(req,res) {
    var options = {
        provider: 'google',
        httpAdapter: 'https', // Default
        apiKey: 'bd5e378503939ddaee76f12ad7a97608', // for Mapquest, OpenCage, Google Premier
        formatter: 'json' // 'gpx', 'string', ...
      };
    var lat = req.params.latitude;
    var lon = req.params.longitude;
    var geocoder = NodeGeocoder(options);

    geocoder.reverse({lat:lat, lon:lon}, function(err, resp) {
      console.log(resp);
      
    });
    res.end();
})

route.post('/',function(req,res){
    var newdb={
        emailid:req.body.emailid,
        password:req.body.password
    }
    mydb.addData(newdb,function(err,data){
        if(err) throw err;
        res.json(data);
    })
})


module.exports=route
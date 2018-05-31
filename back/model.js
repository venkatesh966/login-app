var mongoose=require('mongoose');

var login=mongoose.Schema({

    emailid:String,
    password:String

})
console.log("I am in model file")

var mydb=module.exports=mongoose.model('mydb',login);

module.exports.getData=function(callback){
    mydb.find(callback);
}
module.exports.addData=function(newdb,callback){
    mydb.create(newdb,callback);

}


